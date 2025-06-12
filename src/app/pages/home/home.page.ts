import { Component } from '@angular/core';
import { SearchBar } from './../../shared/components/search-bar/search-bar.component';
import { CityCurrentWeatherCardComponent } from '../../shared/components/city-forecast-card/city-current-weather-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBar, CityCurrentWeatherCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {}
