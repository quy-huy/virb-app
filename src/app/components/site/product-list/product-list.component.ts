import { Component, OnInit } from '@angular/core';
import Product from '../../../product'
import { ProductApiService } from 'app/service/product-api.service';
declare var $: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: any[] = [];
  constructor(private productSv: ProductApiService) { }
   
  ngOnInit() {
      this.getJSON();
    
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 400],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));



  }

  getJSON() {
      this.productSv.getJSON().subscribe(res => {
          console.log(res);
      this.products=res;
      }, errors => {
          console.log(errors);
          
      })
  }

}
