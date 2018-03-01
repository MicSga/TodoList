import {Component, OnDestroy, OnInit} from '@angular/core';
import {Magasin} from '../../../models/magasin';
import {Produit} from '../../../models/produit';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {MagasinService} from '../../services/magasin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private magasin: Magasin;

  currentMax: number = 5;
  constructor(private route: Router, private _repo: MagasinService){

  }


  get repo(): MagasinService {
    return this._repo;
  }

  ngOnInit(){
    this.magasin = this._repo.Magasin;

    // localStorage.clear();
    // if(localStorage.getItem("magasin") == null){
    //   for(let i = 0; i < 22; i++){
    //     this.magasin.Ajouter(
    //       new Produit({
    //         _CodeBar: "cb"+ i,
    //         _Title: "Produit"+ i,
    //         _Description: "Description"+ i,
    //         _Prix: 10+ i
    //       })
    //     );
    //   }
    //   this.SetProduit(false);
    //   localStorage.setItem("magasin", JSON.stringify(this.produits));
    // }
    // else{
    //   let storage = JSON.parse(localStorage.getItem("magasin"));
    //
    //   for(let item of storage){
    //     this.magasin.Produits.set(new Produit(item.key), item.value);
    //   }
    //
    //   this.SetProduit(false);
    // }

  }

  // get Produits(): Array<any>{
  //   return this.produits;
  // }
  // ToggleEnSolde(produit: Produit): void{
  //   let pastValue = produit.EnSolde;
  //   produit.EnSolde = !produit.EnSolde;
  //   this.produits.forEach((obj,index, array) => {
  //     if(obj.key == produit && !produit.EnSolde){
  //       array.splice(index, 1);
  //     }
  //   });
  // }
  // SetProduit(checkbox: boolean): void{
  //   let instance = this;
  //   instance.produits = [];
  //   if(checkbox){
  //
  //     this.magasin.Produits.forEach((value, key, map) => {
  //       if(key.EnSolde){
  //         instance.produits.push({key: key, value: value});
  //       }
  //     })
  //   }else{
  //     this.magasin.Produits.forEach((value, key, map) => {
  //       console.log(key);
  //       instance.produits.push({key: key, value: value});
  //     })
  //   }
  // }

  Acheter(produit: Produit, i: number): void{
    // this.produits[i].value--;
    this.magasin.Vendre(produit);
  }
  Commander(produit: Produit, i: number): void{
    // this.produits[i].value += 50;
    this.magasin.Ajouter(produit, 50);
    // this.repo.Update(this.produits);
  }
  Supprimer(produit: Produit, i): void{
    // this.produits.splice(i, 1);
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
  ToDetail(cb: string){
    console.log(cb);
    this.route.navigate(["/product/detail/"+ cb]);
  }
}
