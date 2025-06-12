import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

export interface DailyForecast {
  cityName: string;
  countryCode: string;
  temperature: number;
  feelsLike: number;
  weatherDescription: string;
  humidity: number;
  windSpeed: number;
  weatherIconUrl: string;
}

const dailyForecast: DailyForecast[] = [
  {
    cityName: 'São José do Rio Preto',
    countryCode: 'Brasil',
    temperature: 28.2,
    feelsLike: 28.2,
    weatherDescription: 'Céu limpo',
    humidity: 64,
    windSpeed: 1.54,
    weatherIconUrl: '',
  },
];

@Component({
  selector: 'app-city-current-weather-card',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule, MatIconModule],
  templateUrl: './city-current-weather-card.component.html',
  styleUrls: ['./city-current-weather-card.component.css'],
})

export class CityCurrentWeatherCardComponent {
  @Input() dailyForecast : DailyForecast[] = dailyForecast;
  @Input() isRemove : boolean = false;
}
