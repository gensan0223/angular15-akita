import { Injectable } from '@angular/core';
import { CounterStore } from './counter.store';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private counterStore: CounterStore) {}

  increment() {
    this.counterStore.update((store) => ({
      ...store,
      favorite: store.favorite + 1,
    }));
  }
}
