import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit Keg:</h3>
    <input [(ngModel)]="keg.name" placeholder="Brew Name">
    <input [(ngModel)]="keg.brand" placeholder="Brand">
    <span class="currencyinput">$<input [(ngModel)]="keg.price" placeholder="Price"></span>
    <input [(ngModel)]="keg.abv" placeholder="ABV">
  </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
