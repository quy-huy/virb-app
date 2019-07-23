import { Component, OnInit } from '@angular/core';
import Product from 'app/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private activeRoute: ActivatedRoute) { 
    console.log(this.activeRoute.snapshot.params);
    
  }

  ngOnInit() {
    if (this.activeRoute.snapshot.params.hasOwnProperty('id')) {
      this.getProductDetail()
    }
  }

  getProductDetail() {
    // TODO call api get product detail
    // ID product
    // this.product = new Product(res.data) 
  }
}
