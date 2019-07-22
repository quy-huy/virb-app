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
    products: any[] = [];
    searchTerm = new FormControl('');
    inputValue$ = new Subject();
    priceFilter: string;

  constructor(private productSv: ProductApiService) { }
   
  ngOnInit() {
    this.getJSON();

    this.inputValue$
        .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        )
        .subscribe((searchTerms) => {
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


  filterPrice() {
    const priceRange = this.filter.value.priceFilter.split(' - ');
    if (priceRange.length >= 2 ) {
      const opts = {
        price_gte: priceRange[1],
        price_lte: priceRange[0]
      }
      this.productSv.getJSON(opts).subscribe(res => {
        console.log(res.data);
        this.products = res.data;
      }, errors => {
        console.log(errors);
        
      });
    }
    
  }

  onChange(event) {
    this.inputValue$.next(event.target.value);
  }





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
