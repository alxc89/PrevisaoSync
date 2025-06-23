import { Component, Input } from '@angular/core';
import { SearchBar } from './../../shared/components/search-bar/search-bar.component';
import { CityCurrentWeatherCardComponent } from '../../shared/components/city-forecast-card/city-current-weather-card.component';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../core/services/cityService.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBar, CityCurrentWeatherCardComponent, CommonModule],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  weatherData!: WeatherData[];

  showForecast(data: any): void {
    this.weatherData = [];
    this.weatherData.push({
      id: data.id,
      name: data.name,
      state: data.state,
      country: data.country,
      coord: data.coord,
      weather: data.weather,
      main: data.main,
      wind: data.wind,
      dt_Txt: ''
    });
  }
}
