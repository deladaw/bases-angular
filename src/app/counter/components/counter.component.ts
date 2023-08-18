import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
    <button (click)="increment(value)">+{{ value }}</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrement(value)">-{{ value }}</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  public value: number = 5;

  increment(value: number): void {
    this.counter += value;
  }

  decrement(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
