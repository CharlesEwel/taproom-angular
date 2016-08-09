import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(input: Keg[], args){
    var desiredSortVariable = parseInt(args[0]);
    var pricedKegs = [];
    input.forEach(function(keg){
      pricedKegs.push([keg.id, keg.brand, keg.name, keg.price, keg.abv, keg]);
    });
    pricedKegs.sort(function (a, b) {
    if (a[desiredSortVariable] > b[desiredSortVariable]) {
      return 1;
    }
    if (a[desiredSortVariable] < b[desiredSortVariable]) {
      return -1;
    }
    return 0;
    });
    var output = [];
    pricedKegs.forEach(function(priceKegPair){
      output.push(priceKegPair[5]);
    });
    return output;
  }
}
