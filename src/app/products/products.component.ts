import { Component, OnInit } from '@angular/core';
import { discount } from '../Shared Classes and types/DiscountOffers';
import { Iproduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { ProductServiceService } from '../servises/product-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private ProductService:ProductServiceService)
     {

       this.Discount=discount.NoDiscount,
       this.Store_name='Gallery',
       this.Store_Logo='../../assets/2.PNG',
       this.ClientName='Enter your name',
       this.isPurchased=false,
       this.ProductList=[
        {
          ID:1,
          Name:"Samsung A12",
          Quantity:1,
          Price:200,
          Img:""
        },
        {
          ID:2,
          Name:"oppo a53",
          Quantity:1,
          Price:100,
          Img:""
        },
        {
          ID:3,
          Name:"lenovo a11",
          Quantity:1,
          Price:300,
          Img:""
        }
      ]
      this.ProductList= this.renderValues();
      this.CategoryList=[
        {
          ID:1,
          Name:"Samsung"
        },
        {
          ID:2,
          Name:"oppo"
        },
        {
          ID:3,
          Name:"lenovo"
        }
      ]

     }

  isPurchased:boolean;
  noDis:string=discount.NoDiscount;
  Discount: discount;
  Store_name:string;
  Store_Logo:string;
  ProductList:Iproduct[];
  CategoryList:ICategory[];
  ClientName:string;   
  renderValues(){
    return this.ProductService.getAllProducts();
   }
  ngOnInit(): void {
  }
  purshased():void{

    this.isPurchased=!this.isPurchased;
   
   }
   

}