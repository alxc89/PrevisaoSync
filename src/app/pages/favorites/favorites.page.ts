import { Component } from '@angular/core';
import { CityCurrentWeatherCardComponent } from '../../shared/components/city-forecast-card/city-current-weather-card.component';
import { FavoriteService } from '../../core/services/favorites.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherData } from '../../core/services/cityService.service';

@Component({
  selector: 'app-favorites',
  imports: [CityCurrentWeatherCardComponent],
  templateUrl: './favorites.page.html',
  styleUrl: './favorites.page.css',
})
export class FavoritesPage {
  favorites: any[] = [];
  userId = '1';
  weatherData!: WeatherData[];

  constructor(
    private route: ActivatedRoute,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites(): void {
    this.favoriteService.getFavorites(this.userId).subscribe({
      next: (data: any) => {
        console.log('getFavorites:', data);
        this.weatherData = [];

        data.forEach((favorite: any) => {
          this.weatherData.push({
            id: favorite.id,
            name: favorite.name,
            state: favorite.state,
            country: favorite.country,
            coord: {
              lat: favorite.lat,
              lon: favorite.lon,
            },
            weather: [
              {
                id: 0,
                main: '',
                description: favorite.description,
                icon: favorite.icon,
              },
            ],
            main: {
              temp: favorite.temp,
              feels_like: favorite.feels_like,
              temp_min: favorite.temp_min,
              temp_max: favorite.temp_max,
              pressure: favorite.pressure,
              humidity: favorite.humidity,
              sea_level: favorite.sea_level,
              grnd_level: favorite.grnd_level,
              temp_kf: favorite.temp_kf,
            },
            wind: {
              speed: favorite.speed,
              deg: favorite.deg,
              gust: favorite.gust,
            },
            dt_Txt: '',
          });
        });
      },
      error: (err) => {
        console.error('Erro ao buscar favoritos:', err);
      },
    });
  }
}
