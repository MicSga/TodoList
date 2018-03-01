import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';
import {Produit} from "../../../models/produit";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private _prodDetail: Produit;

  get ProdDetail(): Produit {
    return this._prodDetail;
  }


  set ProdDetail(value: Produit) {
    this._prodDetail = value;
  }

  constructor(private route: ActivatedRoute)  { }

  ngOnInit() {
    let CodeBar;
    this.route.params.subscribe( (params) => {
      //get product by code barre
      CodeBar = params["CodeBar"];

    });
  }


}
