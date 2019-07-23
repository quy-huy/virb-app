import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'app/service/product-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
declare var $: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    filter = new FormGroup({
      priceFilter: new FormControl('')
    });

    brand = new FormGroup({
    
    })
    products: any[] = [];
    searchTerm = new FormControl('');
    showTerm = new FormControl('12');
    inputValue$ = new Subject();
    priceFilter: any;
    brandFilter: any;
    inputNum$ = new Subject();

  constructor(private productSv: ProductApiService) { }
   
  ngOnInit() {
    this.getJSON();

    

    this.inputNum$
        .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        )
        .subscribe((showTerm) => {
          // console.log(searchTerm, 'inputValue$')
          if(!!showTerm){
            this.getJSON();
          }
        }); 
        this.inputValue$
        .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        )
        .subscribe((showTerm) => {
          // console.log(searchTerm, 'inputValue$')
         
            this.getJSON();
        
        }); 
       
    
    $("#slider-range").slider({
        range: true,
        min: 1000000,
        max: 20000000,
        values: [6000000, 14000000],
        slide:(event, ui) => {
            $("#amount").val( ui.values[0]  + " - " + ui.values[1]);
            this.filter.value.priceFilter = ui.values[0]  + " - " + ui.values[1];
        }
    });
    $("#amount").val( $("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1  ) );
  }

  onChange(event) {
    // console.log(event, 'onChange')
    this.inputValue$.next(event.target.value);

  }
  onCreate(event) {
    this.inputNum$.next(event.target.value);
  }


  getJSON() {
    const opts = {
        name: this.searchTerm.value,
        per_page: this.showTerm.value,
        ...this.priceFilter,
        ...this.brandFilter,

    }
    // console.log(opts, 'getJSON')
    this.productSv.getJSON(opts).subscribe(res => {
    console.log(res.data);
    this.products=res.data
    }, errors => {
        console.log(errors);
    })
}

  filterPrice() {
    const priceRange = this.filter.value.priceFilter.split(' - ');
    if (priceRange.length >= 2 ) {
      this.priceFilter = {
        price_lte: priceRange[1],
        price_gte: priceRange[0]
      }
      this.getJSON();
    }
  }

  filterBrand(brandID = this.brand.value) {
    if(brandID == 1) {
      this.brandFilter = {category_id: brandID}
      this.getJSON();
    }
    else if(brandID == 2) {
      this.brandFilter = {category_id: brandID}
      this.getJSON();
    }
    else if(brandID == 3) {
      this.brandFilter = {category_id: brandID}
      this.getJSON();
    }
  }

 







}
