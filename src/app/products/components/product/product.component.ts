import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data:any={};
  @Output()item=new EventEmitter();
  addButton:boolean=false;
  amount:number=0;
  constructor() { }

  add(){
    this.item.emit({item:this.data,quantity:this.amount});

  }
  ngOnInit(): void {
  }

}
