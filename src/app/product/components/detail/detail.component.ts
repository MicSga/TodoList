import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Produit} from '../../../models/produit';
import {ProductService} from '../../services/product.service';
// import {ProductRepositoryService} from '../../services/product-repository.service';
//
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  private subscription;
  Produit: Produit;
  constructor(private route: ActivatedRoute, private repo: ProductService) { }

  ngOnInit() {
    let cb;
    this.subscription = this.route.params.subscribe((params) => {
      cb = params["CodeBar"];
    });

    this.Produit = this.repo.GetOneByCodeBar(cb);
  }
  ngOnDestroy(): void {
    // this.subscription.u
  }

}
