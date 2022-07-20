import { Component, OnInit } from '@angular/core';

import{ProductsService}from '../../services/products.service'
import { Product } from './../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:Product[]=[];
  categories:string[]=[];
  loading:boolean=false;
  cartProduct:any[]=[];

  constructor(private _ProductsService:ProductsService) { }

  getProducts(){
    this.loading=true;
    this._ProductsService.getAllProducts().subscribe((data:any)=>{
      this.products=data;
      this.loading=false;
        
    },error=>{
      this.loading=false;
      alert(error);
    })
  }
  getCategories()
  {
    this.loading=true;
    this._ProductsService.getAllCategories().subscribe((data)=>{
      this.categories=data;
      this.loading=false;
          },error=>{
            this.loading=false;
            alert(error);
          })
  }

  filterCategory(event:any)
  {
    let value=event.target.value;
    // if(value=="all"){
    //   this.getProducts();
    // }else{
    //   this.getProductsCategory(value)
    // }
    (value=='all')?this.getProducts():this.getProductsCategory(value);
    
  }
  getProductsCategory(keyword:string)
  {
    this.loading=true;
    this._ProductsService.getProductsByCategory(keyword).subscribe((data:any)=>{
    this.products=data
    this.loading=false;
})
  }
   // JSON.stringify===>send data
   // JSON.parse====>receive data
  addToCart(event:any)
  {
    if("cart" in localStorage)
    {
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!) ;
      let exist=this.cartProduct.find(item=>item.item.id ==event.item.id);
      if(exist)
      {
        alert("product is already in ypur cart");
      }else
      {
        this.cartProduct.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProduct));
      }
    
    }else
    {
      this.cartProduct.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    }
   
  } 

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

}
