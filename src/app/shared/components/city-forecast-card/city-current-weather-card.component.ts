import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { WeatherData } from '../../../core/services/cityService.service';
import {
  FavoriteCity,
  FavoriteService,
} from '../../../core/services/favorites.service';

@Component({
  selector: 'app-city-current-weather-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule, MatIconModule],
  templateUrl: './city-current-weather-card.component.html',
  styleUrls: ['./city-current-weather-card.component.css'],
})
export class CityCurrentWeatherCardComponent {
  @Input() weatherData: WeatherData[] = [];
  @Input() isRemove: boolean = false;
  favoriteCity!: FavoriteCity;

  constructor(private favoriteService: FavoriteService) {}

  favorites(forecast: any): void {
    this.favoriteCity = {
      id: forecast.id,
      code: forecast.id.toString(),
      name: forecast.name,
      lon: forecast.lon,
      lat: forecast.lat,
      icon: forecast.weather[0].icon,
      temp: forecast.main.temp,
      feels_like: forecast.main.feels_like,
      description: forecast.weather[0].description,
      humidity: forecast.main.humidity,
      speed: forecast.wind.speed,
      userId: 1,
    };
    console.log('Favoritos:', this.favoriteCity);

    this.favoriteService.addFavorites(this.favoriteCity).subscribe({
      next: (data) => {
        console.log('Favoritos:', data);
      },
      error: (err) => {
        console.error('Erro ao adicionar aos favoritos:', err);
      },
    });
    console.log(this.favoriteCity);
  }
}
