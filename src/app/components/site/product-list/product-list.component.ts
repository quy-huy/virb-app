import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'app/service/product-api.service';
import { FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
declare var $: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    filter = new FormControl('');
    products: any[] = [];
    searchTerm = new FormControl('');
    inputValue$ = new Subject();

  constructor(private productSv: ProductApiService) { }
   
  ngOnInit() {
    this.getJSON();

    this.inputValue$
        .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        )
        .subscribe((searchTerms) => {
            this.getJSON();
        }); 
    
    $("#slider-range").slider({
        range: true,
        min: 1,
        max: 20,
        values: [6, 14],
        slide: function(event, ui) {
            $("#amount").val( ui.values[0] + "trieu" + " - " + ui.values[1]+ "trieu");
        }
    });
    $("#amount").val( $("#slider-range").slider("values", 0) + "trieu" +
        " - " + $("#slider-range").slider("values", 1) + "trieu");



  }

  onChange(event) {
    this.inputValue$.next(event.target.value);
      
  }

  // createProduct() {
  //     this.productSv.createProduct().subscribe(res => {
  //         console.log(res);
  //     this.products=res;
  //     }, errors => {
  //         console.log(errors);
          
  //     })
  // }

  getJSON() {
    const opts = {
      params: {
        name: this.searchTerm.value,
      }
    }
    this.productSv.getJSON(opts).subscribe(res => {
        console.log(res.data);
    this.products=res.data

    
    }, errors => {
        console.log(errors);

    })
}

}
