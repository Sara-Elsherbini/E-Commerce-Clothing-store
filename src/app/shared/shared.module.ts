import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
 

  CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    HeaderComponent ,
    NotFoundComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
