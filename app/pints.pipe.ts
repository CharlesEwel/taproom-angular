import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "pints",
  pure: false
})
export class PintsPipe implements PipeTransform {
  transform(input: Keg[], args){
    var desiredPipeThreshold = args[0];
    if(desiredPipeThreshold === "near-empty") {
      return input.filter((keg) => {
        return keg.pints<=10;
      });
    } else {
      return input;
    }
  }
}
