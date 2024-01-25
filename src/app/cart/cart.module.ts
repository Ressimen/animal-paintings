import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarViewComponent } from './car-view/car-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CarViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class CartModule { }
