import { Component } from '@angular/core';
import { CardForecastDetailsComponent } from './components/city-forecast-details-card/city-forecast-details-card.component';
import { HeaderForecastDetailsComponent } from './components/forecast-details/forecast-details.component';

@Component({
  selector: 'app-details-page',
  imports: [CardForecastDetailsComponent, HeaderForecastDetailsComponent],
  templateUrl: './details.page.html',
  styleUrl: './details.page.css',
})
export class DetailsPage {}
