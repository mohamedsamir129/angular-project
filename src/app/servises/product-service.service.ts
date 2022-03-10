import { Injectable } from '@angular/core';
import { Iproduct } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  productList: Iproduct[]=
  [
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
  getAllProducts() {
    return this.productList
  }
  GetProductById($id:number){
    if(this.productList[$id] == undefined){
      return null;
    }
    else{
      return this.productList[$id]
    }

  }
}
