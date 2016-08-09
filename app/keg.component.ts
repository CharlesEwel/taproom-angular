import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <p>  {{keg.brand}} {{keg.name}} - ABV: {{keg.abv}} - \${{keg.price}} <img *ngIf="keg.price >= 5" class="expensive" src="./../resources/images/expensive.png"></p>
    <div ng-app="">
      <p> Tapped at {{weekdays[keg.timeTapped.getDay()]}}, {{keg.timeTapped.getHours()}}:{{keg.timeTapped.getMinutes()}}, {{keg.pints}} pints left </p>
      <p *ngIf="newDate-keg.timeTapped.getTime() > 2.592e8 && keg.pints>=30"> Put this one on Special! </p>
    </div>
    <button (click)="sellPint()">Sell Pint</button>
    <hr>
  `
})

export class KegComponent {
  public keg: Keg;
  public newDate = Date.now();
  public weekdays: string[]= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  constructor() {

  }
  sellPint() {
    if(this.keg.pints === 1)
    {
      this.keg.brand = "EMPTY - " + this.keg.brand;
      this.keg.pints -= 1;
    }
    else if(this.keg.pints > 1) {
      this.keg.pints -= 1;
    }
  }
}
