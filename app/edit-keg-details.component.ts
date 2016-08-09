import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
    <h3>Edit Name:</h3>
    <input [(ngModel)]="keg.name">
    <h3>Edit Brand:</h3>
    <input [(ngModel)]="keg.brand">
    <h3>Edit Price:</h3>
    <input [(ngModel)]="keg.price">
    <h3>Edit ABV:</h3>
    <input [(ngModel)]="keg.abv">
  </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
