import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { WeatherData, CityService, City } from '../../../core/services/cityService.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule,
  ],
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBar {
  value = '';
  @Output() forecastSelected = new EventEmitter<WeatherData[]>();

  searchControl = new FormControl('');
  filteredCities$!: Observable<City[]>;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.filteredCities$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.cityService.searchCities(query || ''))
    );
  }

  displayFn(city: City): string {
    return city ? `${city.name} - ${city.country}` : '';
  }

  onSelect(city: City): void {
    console.log('Cidade selecionada:', city);
    this.cityService.getWeather(city.id).subscribe({
      next: (data : WeatherData[]) => {
        console.log('busca previsão: ', data);
        this.forecastSelected.emit(data);
      },
      error: (err) => {
        console.error('Erro ao buscar previsão:', err);
      },
    });
  }
}
