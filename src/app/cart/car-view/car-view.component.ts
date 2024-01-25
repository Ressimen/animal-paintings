import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit{
 
  cartItems : Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService){}
 
  ngOnInit(): void {
    this.cartService.getCardItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }

  getTotalPrice(): number {
    let total = 0;
    for( let item of this.cartItems){
      total += item.price;
    }
    return total;
  }

  clearCart(): void{
    this.cartService.clearCart().subscribe();
  }

  onCheckOut(): void{
    this.cartService.checkOut(this.cartItems).subscribe();
    
  }

}
