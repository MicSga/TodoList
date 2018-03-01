import {Injectable, OnInit} from '@angular/core';
import {Produit} from "../models/produit";
import {Magasin} from "../models/magasin";

@Injectable()
export class ProductFactoryservice implements OnInit{

  private magasin: Magasin;
  private produits: Array<any>;


  constructor() {
    this.magasin= new Magasin();
    this.produits = [];
  }
  ngOnInit(){

    if(localStorage.getItem("magasin") == null){
      for(let i = 0; i < 22; i++){
        this.magasin.Ajouter(
          new Produit({
            _CodeBar: "cb"+ i,
            _Title: "Produit"+ i,
            _Description: "Description"+ i,
            _Prix: 10+ i
          })
        );
      }

      localStorage.setItem("magasin", JSON.stringify(this.produits));
    }
    else{
      let storage = JSON.parse(localStorage.getItem("magasin"));

      for(let item of storage){
        this.magasin.Produits.set(new Produit(item.key), item.value);
      }
    }
  }
  getAllProduct():Produit[]{

    let pr : Produit[];
    let storage = JSON.parse(localStorage.getItem("magasin"));
    let instance = this;
    storage.forEach((item) => {
      pr.push(new Produit(item.key));
    });
    return pr;
  }

  getProductByName(productTitle : string):Produit{

    let pr : Produit;
    let storage = JSON.parse(localStorage.getItem("magasin"));
    let instance = this;
    storage.forEach((item) => {
      if(item.key._Title == productTitle){
        pr = new Produit(item.key);
      }
    });

    return pr;
  }


}
