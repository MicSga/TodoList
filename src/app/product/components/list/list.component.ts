import { Component, OnInit } from '@angular/core';
import {Magasin} from '../../../models/magasin';
import {Produit} from '../../../models/produit';
import {ProductFactoryservice} from "../../product-factory.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



  private produits: Array<any>;
  private magasin: Magasin;

  currentMax: number = 5;
  constructor(private productFactory: ProductFactoryservice){

  }

  ngOnInit(){
    this.magasin = new Magasin();
    this.magasin.Produits = this.productFactory.getAllProduct()
  }

  get Produits(): Array<any>{
    return this.produits;
  }

  ToggleEnSolde(produit: Produit): void{
    let pastValue = produit.EnSolde;
    produit.EnSolde = !produit.EnSolde;
    this.produits.forEach((obj,index, array) => {
      if(obj.key == produit && !produit.EnSolde){
        array.splice(index, 1);
      }
    });
  }

  SetProduit(checkbox: boolean): void{
    let instance = this;
    instance.produits = [];
    if(checkbox){

      this.magasin.Produits.forEach((value, key, map) => {
        if(key.EnSolde){
          instance.produits.push({key: key, value: value});
        }
      })
    }else{
      this.magasin.Produits.forEach((value, key, map) => {
        console.log(key);
        instance.produits.push({key: key, value: value});
      })
    }
  }

  Acheter(produit: Produit, i: number): void{
    this.produits[i].value--;
    this.magasin.Vendre(produit);
  }
  Commander(produit: Produit, i: number): void{
    this.produits[i].value += 50;
    this.magasin.Ajouter(produit, 50);
  }
  Supprimer(produit: Produit, i): void{
    this.produits.splice(i, 1);
    this.magasin.Supprimer(produit);
  }

  Pager(button: HTMLButtonElement): void{
    let name = button.name;

    switch (name){
      case "up":
        this.currentMax += 5;
        break;
      case "down":
        this.currentMax -= 5;
        break;
    }
  }

}
