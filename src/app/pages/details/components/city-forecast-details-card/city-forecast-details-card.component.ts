import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { WeatherData } from '../../../../core/services/cityService.service';

export interface DailyForecast {
  date: string;
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  iconUrl: string;
}

@Component({
  selector: 'app-card-forecast-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './city-forecast-details-card.component.html',
  styleUrls: ['./city-forecast-details-card.component.css'],
})
export class CardForecastDetailsComponent {
  @Input() weatherDetailsData!: WeatherData[];
}
