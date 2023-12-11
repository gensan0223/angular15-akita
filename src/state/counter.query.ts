import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CounterStore, CounterState } from './counter.store';

@Injectable({
  providedIn: 'root',
})
export class CounterQuery extends Query<CounterState> {
  constructor(protected override store: CounterStore) {
    super(store);
  }
}
