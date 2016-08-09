import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import {NewKegComponent} from './new-keg.component';
import { Keg } from "./keg.model";
import {PintsPipe} from './pints.pipe';
import {SortPipe} from './sort.pipe';

@Component ({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [PintsPipe, SortPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  templateUrl: 'app/keg-list.component.html'
})

export class KegListComponent {
  public filterSort: string = "0";
  public filterPints: string = "all";
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
  onPintsChange(filterOption) {
    this.filterPints = filterOption;
  }
  onSortChange(filterOption) {
    this.filterSort = filterOption;
  }
}
