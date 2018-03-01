import { Component, OnInit } from '@angular/core';

import {Magasin} from './models/magasin';
import {Produit} from './models/produit';
import {current} from 'codelyzer/util/syntaxKind';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from './product/services/product.service';
import {MagasinService} from './product/services/magasin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private _Produit: Produit;

  constructor(private repo: MagasinService){}

  ngOnInit(): void {
    this._Produit = this.repo.Products.GetOneByCodeBar("cb0");
  }

  get Magasin(): Magasin{
    return this.repo.Magasin;
  }
  get Produit(): Produit {
    return this._Produit;
  }

  set Produit(value: Produit) {
    this._Produit = value;
  }
}
