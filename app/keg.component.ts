import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <p>  {{keg.brand}} {{keg.name}} - ABV: {{keg.abv}} - \${{keg.price}} <img *ngIf="keg.price >= 5" class="expensive" src="./../resources/images/expensive.png"></p>
    <p> {{keg.pints}} pints left </p>
    <button (click)="sellPint()">Sell Pint</button>
    <hr>
  `
})

export class KegComponent {
  public keg: Keg;
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
