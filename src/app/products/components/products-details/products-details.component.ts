import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ProductsService}from '../../services/products.service'


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any={};
  loading:boolean=false;

  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService  ) {
    this.id=_ActivatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    
   }
   getProductById()
   {
      this.loading=true
      this._ProductsService.getProductById(this.id).subscribe((res)=>{
        this.loading=false;
        this.data=res;
      },error =>{
        this.loading=false
        alert(error)
      })
   }
  ngOnInit(): void {
    this.getProductById()
  }

}
