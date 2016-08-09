import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <p>  {{keg.brand}} {{keg.name}} - ABV: {{keg.abv}} - \${{keg.price}}  </p>
    <p> {{keg.pints}} pints left </p>
    <hr>
  `
})

export class KegComponent {
  public keg: Keg;

}
