import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterQuery, CounterService } from 'src/state';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [CommonModule],
})
export class CounterComponent implements OnInit {
  readonly favorite$: Observable<number>;

  constructor(
    private counterService: CounterService,
    private counterQuery: CounterQuery,
  ) {
    this.favorite$ = this.counterQuery.select('favorite');
  }

  ngOnInit() {}

  increment() {
    this.counterService.increment();
  }
}
