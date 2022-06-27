import { Component, OnInit } from '@angular/core';
import {CartsService} from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProduct:any[]=[];
  total:any=0;
  success:boolean=false;

  constructor(private _CartsService:CartsService ) { }
  getCartProduct()
  {
    if("cart" in localStorage)
    {
      this.cartProduct=JSON.parse(localStorage.getItem("cart")!) ;
    }
  this.getCartTotal();
  
  }
  getCartTotal()
  {
    this.total=0;
    for(let x in this.cartProduct){
      this.total+=this.cartProduct[x].item.price *this.cartProduct[x].quantity
    }

  }

  addAmount(index:number)
  {
    this.cartProduct[index].quantity++;
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));

  }

  minsAmount(index:number)
  {
    this.cartProduct[index].quantity--;
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
  }
  detectChange(){
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
  }

  deleteProduct(index:number)
  {
    this.cartProduct.splice(index,1);
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
  }
  clearCart()
  {
    this.cartProduct=[]
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));

  }
  addCart()
  {
    let products=this.cartProduct.map(item=>{
      return {productId:item.item.productId,quantity:item.quantity}
    })
    let Model=
    {
      userId:5,
      date:new Date(),
      products:products
    }
    this._CartsService.createNewCart(Model).subscribe((res)=>{
      this.success=true
    })
    console.log(Model);
    

  }
  
  ngOnInit(): void {
   this.getCartProduct()
  }

}
