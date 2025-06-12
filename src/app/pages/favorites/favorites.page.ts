import { Component } from '@angular/core';
import { CityCurrentWeatherCardComponent } from '../../shared/components/city-forecast-card/city-current-weather-card.component';

@Component({
  selector: 'app-favorites',
  imports: [CityCurrentWeatherCardComponent],
  templateUrl: './favorites.page.html',
  styleUrl: './favorites.page.css'
})
export class FavoritesPage {
}
