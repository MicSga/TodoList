import {Produit} from './produit';

export class Magasin {
  private _Nom: string;
  private _Produits: Map<Produit, number>;

  constructor(){
    this._Produits = new Map<Produit, number>();
  }

  get Nom(): string {
    return this._Nom;
  }
  get Produits(): Map<Produit, number> {
    return this._Produits;
  }

  set Produits(value: Map<Produit, number>) {
    this._Produits = value;
  }
  set Nom(value: string) {
    this._Nom = value;
  }

  Ajouter(produit: Produit, nombre?: number): void{
    if(!this.Produits.has(produit)){
      this.Produits.set(produit, 10);
    }else{
      let nbr = this.Produits.get(produit);
      this.Produits.set(produit, nbr + (nombre || 1));
    }
  }
  Supprimer(produit: Produit): void{
    if(this.Produits.has(produit)){
      this.Produits.delete(produit);
    }
  }
  Vendre(produit: Produit){
    if(this.Produits.has(produit)){
      let nbr = this.Produits.get(produit);
      if(nbr > 0)
        this.Produits.set(produit, nbr - 1);
    }
  }
}
