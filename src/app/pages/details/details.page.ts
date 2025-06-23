import { Component } from '@angular/core';
import { CardForecastDetailsComponent } from './components/city-forecast-details-card/city-forecast-details-card.component';
import { HeaderForecastDetailsComponent } from './components/forecast-details/forecast-details.component';
import {
  CityService,
  WeatherData,
} from '../../core/services/cityService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CardForecastDetailsComponent, HeaderForecastDetailsComponent],
  templateUrl: './details.page.html',
  styleUrl: './details.page.css',
})
export class DetailsPage {
  weatherDetailsData!: WeatherData[];

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    const lat = this.route.snapshot.paramMap.get('lat');
    const lon = this.route.snapshot.paramMap.get('lon');
    if (lat && lon) {
      this.cityService.getWeatherDetails(+lat, +lon).subscribe({
        next: (data: any) => {
          console.log('dados recibos details: ', data);
          console.log('dados recibos details tipo: ', typeof data);
          this.weatherDetailsData = data.list;
          console.log('weatherData details: ', this.weatherDetailsData);
        },
        error: (error) => {
          console.log('Erro ao buscar dados:', error);
        },
      });
    }
  }
}
