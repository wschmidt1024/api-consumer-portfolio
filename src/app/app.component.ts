import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateFacade } from './+state/app.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'API Consumer Portfolio';

  constructor(private stateFacade: AppStateFacade) {}

  ngOnInit(): void {
    this.stateFacade.loadUser();
    this.stateFacade.loadWeatherLocations();
    this.stateFacade.weatherLocations$.subscribe(r => console.log('locations', r));
  }
}
