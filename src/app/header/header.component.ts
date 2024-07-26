import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  src = '../../../public/ang-icon.jpg';
  count: Observable<number> = new Observable()
  constructor(private store: Store<AppState>) {
    this.count = this.store.select(state => state.counter.count);
  }

}
