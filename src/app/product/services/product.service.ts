import { Injectable } from '@angular/core';
import {Produit} from '../../models/produit';

@Injectable()
export class ProductService {
  private static PRODUCT_KEY: string = "PRODUCTS";

  constructor() {
    if(!this.CheckStorage())
      this.init();
  }

  GetAll(): Array<Produit>{
    let products = [];
    let productsImp = [];

    products = JSON.parse(localStorage.getItem(ProductService.PRODUCT_KEY));

    products.forEach((value) => {
      productsImp.push(new Produit(value));
    });

    return productsImp;
  }
  GetOneByCodeBar(cb: string): Produit{
    let products = this.GetAll();

    let index = products.findIndex((value) => value.CodeBar == cb);

    if(index < 0)return null;
    return products[index];
  }

  Update(products: Array<Produit>): void{
    localStorage.setItem(ProductService.PRODUCT_KEY, JSON.stringify(products));
  }

  CheckStorage(): boolean{
    return (localStorage.getItem(ProductService.PRODUCT_KEY) ? true : false);
  }

  private init(): void{
    let products = [];
    for(let i = 0; i < 22; i++){
      products.push(new Produit({
        _CodeBar: "cb"+ i,
        _Title: "Produit"+ i,
        _Description: "Description"+ i,
        _Prix: 10+i
      }));
    }

    this.Update(products);
  }
}
