import { Injectable } from '@angular/core';
import {ProductService} from './product.service';
import {Magasin} from '../../models/magasin';
import {Produit} from '../../models/produit';

@Injectable()
export class MagasinService {
  private _Magasin: Magasin;

  constructor(private productService: ProductService) {
    this._Magasin = new Magasin();
    this.Init();
  }

  Init(){
    let products = this.productService.GetAll();
    let instance = this;
    products.forEach((value) => {
      instance._Magasin.Ajouter(value);
    });
  }

  get Magasin(): Magasin{
    return this._Magasin;
  }
  get Products(): ProductService{
    return this.productService;
  }

  GetAllProductAndQuantity(): Array<any>{
    let array = [];

    this._Magasin.Produits.forEach(((value, key) => {
      array.push({key: key, value: value});
    }));

    return array;
  }

  GetLastCommandProductAndQuantity(): Array<any>{
    let array = [];

    // this._Magasin.Produits.

    return array;
  }
}
