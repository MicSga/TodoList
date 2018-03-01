export class Produit {
  private _CodeBar: string;
  private _Title: string;
  private _Description: string;
  private _Prix: number;
  private _EnSolde: boolean;
  private static REDUCTION: number = 0.2;

  constructor(obj: any){
    this._CodeBar = obj && obj._CodeBar;
    this._Title = obj && obj._Title;
    this._Description = obj && obj._Description;
    this._Prix = obj && obj._Prix;
    this._EnSolde = obj && obj._EnSolde || false;
  }

  get CodeBar(): string {
    return this._CodeBar;
  }
  get Title(): string {
    return this._Title;
  }
  get Description(): string {
    return this._Description;
  }
  get Prix(): number {
    return this._EnSolde ? this._Prix * (1-Produit.REDUCTION) : this._Prix;
  }
  get EnSolde(): boolean{
    return this._EnSolde;
  }

  set CodeBar(value: string) {
    this._CodeBar = value;
  }
  set Title(value: string) {
    this._Title = value;
  }
  set Description(value: string) {
    this._Description = value;
  }
  set Prix(value: number) {
    this._Prix = value;
  }
  set EnSolde(v: boolean){
    this._EnSolde = v;
  }
}
