import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { AsyncPipe } from '@angular/common';
import { decrement, increment, reset } from '../states/counter/counter.actions';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public count: Observable<number> = new Observable();
  constructor(private store: Store<AppState>) {
    this.count = this.store.select(state => state.counter.count);
  }
  inc() {
    this.store.dispatch(increment())
  }
  dic() {
    this.store.dispatch(decrement())

  }
  reset() {
    this.store.dispatch(reset())

  }

}
