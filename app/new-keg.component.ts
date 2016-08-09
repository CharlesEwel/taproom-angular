import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
      <div class="keg-form">
        <h3>Create Keg:</h3>
        <input placeholder="Name" #newName>
        <input placeholder="Brand" #newBrand>
        <span class="currencyinput">$<input type="number" placeholder="Price" #newPrice></span>
        <input type="number" placeholder="ABV" #newABV>
        <button (click)="addKeg(newName, newBrand, newPrice, newABV)" class="add-button">Add</button>
      </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userABV: HTMLInputElement){
    var emission = [];
    emission.push(userName.value);
    emission.push(userBrand.value);
    emission.push(userPrice.value);
    emission.push(userABV.value);
    this.onSubmitNewKeg.emit(emission);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userABV.value = "";
  }
}
