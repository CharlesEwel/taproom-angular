export class Keg {
  public pints: number = 36;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public timeTapped: Date, public id: number){}
}
