import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

export interface DailyForecast {
  date: string;
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  iconUrl: string;
}

const dailyForecast: DailyForecast[] = [
  {
    date: '08/06/2025',
    temperature: 28.2,
    feelsLike: 28.2,
    description: 'Céu Limpo',
    humidity: 64,
    windSpeed: 1.54,
    iconUrl: '',
  },
  {
    date: '09/06/2025',
    temperature: 28.2,
    feelsLike: 28.2,
    description: 'Céu Limpo',
    humidity: 64,
    windSpeed: 1.54,
    iconUrl: '',
  },
  {
    date: '10/06/2025',
    temperature: 28.2,
    feelsLike: 28.2,
    description: 'Céu Limpo',
    humidity: 64,
    windSpeed: 1.54,
    iconUrl: '',
  },
  {
    date: '11/06/2025',
    temperature: 28.2,
    feelsLike: 28.2,
    description: 'Céu Limpo',
    humidity: 64,
    windSpeed: 1.54,
    iconUrl: '',
  },
];

@Component({
  selector: 'app-card-forecast-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './city-forecast-details-card.component.html',
  styleUrls: ['./city-forecast-details-card.component.css'],
})
export class CardForecastDetailsComponent {
  @Input() forecasts: DailyForecast[] = dailyForecast;
}
