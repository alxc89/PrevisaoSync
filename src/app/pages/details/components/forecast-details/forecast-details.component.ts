import { Component, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const weatherIconUrl = '';
const weatherData = {
  name: 'São José do Rio Preto',
  dt: '12/06/2026',
  visibility: 10000,
  sys: {
    country: 'BR',
    sunrise: 1749721863,
    sunset: 1749761037,
  },
  main: {
    temp: 18.15,
    temp_min: 18.15,
    temp_max: 18.15,
    humidity: 45,
    feels_like: 17.2,
    pressure: 1019
  },
  weather: [
    {
      description: 'céu limpo',
      icon: '01n',
    },
  ],
  wind: {
    speed: 3.09,
    deg: 140,
  },
}




@Component({
  selector: 'app-header-forecast-details',
  imports: [MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './forecast-details.component.html',
  styleUrl: './forecast-details.component.css',
})
export class HeaderForecastDetailsComponent {
  @Input() weatherData = weatherData;
  @Input() weatherIconUrl = weatherIconUrl;
}
