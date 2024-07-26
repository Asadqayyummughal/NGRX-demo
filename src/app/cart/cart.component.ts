import { Component, importProvidersFrom } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { Observable } from 'rxjs';
import { addToCart, removeFromCart } from '../states/cart/cart.actions';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  public orders: Observable<number> = new Observable();
  constructor(private store: Store<AppState>) {
    this.orders = this.store.select(state => state.cart.orders);
  }
  addToCart() {
    this.store.dispatch(addToCart());

  }

  removeFromCart() {
    this.store.dispatch(removeFromCart());
  }


}
