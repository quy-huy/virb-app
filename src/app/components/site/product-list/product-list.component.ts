import { Component, OnInit } from '@angular/core';
import Product from '../../../product'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
    
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png",
      name: "iPhone Xs 64GB",
      price: "1300",
      saleprice: "1200"
  },
  {
      
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png",
      name: "iPhone Xs Max 64GB",
      price: "1600",
      saleprice: "1500"
  },
  {
     
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748797174925889_iphone-Xr-den.png",
      name: "iPhone XR 256GB",
      price: "1200",
      saleprice: "1150"
  },
  {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg",
      name: "iPhone X 64GB",
      price: "1450",
      saleprice: "1350"
  },
  {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/5/9/636614727176851624_iphone--8-plus-red-1.png",
      name: "iPhone 8 Plus 256GB RED",
      price: "1400",
      saleprice: "1300"
  },
  {
  
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/20/636808956101668511_iphone8-plus-64-vang-1.png",
      name: "iPhone 8 Plus 64GB",
      price: "1000",
      saleprice: "980"
  },
  {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2017/11/10/636459060591822074_1.jpg",
      name: "iPhone 8 64GB",
      price: "600",
      saleprice: "589"
  },
  {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png",
      name: "Samsung Galaxy S10+",
      price: "1600",
      saleprice: "1580"
  }, {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/24/636812497715500000_ss-s9-plus-64-den-1.png",
      name: "Samsung Galaxy S9+",
      price: "800",
      saleprice: "780"
  }, {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2018/8/20/636703736254310068_note9-xanh-1.jpg",
      name: "Samsung Galaxy Note 9",
      price: "900",
      saleprice: "890"
  }, {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/5/7/636928415238970301_xiaomi-mi-9-xanh-1.png",
      name: "Xiaomi Mi 9",
      price: "550",
      saleprice: "520"
  }, {
      img: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/5/7/636928449917064345_xiaomi-mi-9-se-xanh-1.png",
      name: "Xiaomi Mi 9 SE",
      price: "450",
      saleprice: "430"
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
