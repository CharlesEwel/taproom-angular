import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import {NewKegComponent} from './new-keg.component';
import { Keg } from "./keg.model";

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  templateUrl: 'app/keg-list.component.html'
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect= new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string, brand: string, price: number, ABV: number): void {
    this.kegList.push(
      new Keg(name, brand, price, ABV, this.kegList.length)
    );
  }
}
