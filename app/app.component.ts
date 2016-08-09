import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Welcome to the Taproom</h1>
    <keg-list
      [kegList]="kegs">
    </keg-list>
  </div>
  `
})

export class AppComponent{
  public kegs: Keg[] = [];
  constructor() {
    var lastWednesdayEvening: Date = new Date(2016, 7, 3, 21, 10);
    var lastFridayAfternoon: Date = new Date(2016, 7, 5, 16, 30);
    var lastSaturdayNight: Date = new Date(2016, 7, 6, 19, 45);
    this.kegs = [
      new Keg("Dead Guy Ale", "Rogue", 10, .07, lastWednesdayEvening, 0),
      new Keg("Kingpin Red Ale", "Bridgeport", 3.50, 0.06, lastFridayAfternoon, 1),
      new Keg("Total Domination", "Ninkasi", 3.50, 0.06, lastSaturdayNight, 2)
    ];
  }
}
