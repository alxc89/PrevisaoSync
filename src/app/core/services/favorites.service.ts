import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface FavoriteCity {
  id: Number;
  code: Number,
  name: string;
  lon: Number;
  lat: Number;
  userId: 1;
  icon: string;
  temp: number;
  feels_like: number;
  description: string;
  humidity: number;
  speed: number;
}

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private readonly apiUrl = '/api/FavoriteCity';

  constructor(private http: HttpClient) {}

  getFavorites(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetFavoriteCities/${userId}`);
  }

  addFavorites(favoriteCity: FavoriteCity): Observable<any[]> {
    console.log(`${this.apiUrl}/AddFavoriteCity`)
    console.log('favoriteCity: ', favoriteCity)
    return this.http.post<any[]>(`${this.apiUrl}/AddFavoriteCity`, favoriteCity);
  }
}
