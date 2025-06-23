import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface City {
  id: string;
  name: string;
  state?: string;
  country: string;
  coord: {
    lat: number;
    lon: number;
  };
}

export interface WeatherData {
  id: string;
  name: string;
  state?: string;
  country: string;
  dt_Txt: string;
  coord: {
    lat: number;
    lon: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
  },
  wind: {
    speed: number;
    deg: number;
    gust: number;
  },
}

@Injectable({
  providedIn: 'root',
})

export class CityService {
  private readonly apiUrlCity = '/api/Cities/GetCitySuggestions';
  private readonly apiUrlWeather = '/api/WeatherService';

  constructor(private http: HttpClient) {}

  searchCities(query: string): Observable<City[]> {
    const params = new HttpParams().set('name', query);
    return this.http.get<City[]>(`${this.apiUrlCity}`, { params });
  }

  getWeather(param: string): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(`${this.apiUrlWeather}/weather/${param}`);
  }

  getWeatherDetails(lat: number, lon: number): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(`${this.apiUrlWeather}/details/lat/${lat}/lon/${lon}`);
  }
}
