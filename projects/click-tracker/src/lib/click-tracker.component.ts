import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ct-click-tracker',
  template: `
    <button (click)="increment()">{{ clicks }} clicks</button>
  `,
  styles: [`
    button {
      background-color: cornflowerblue;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }
  `]
})
export class ClickTrackerComponent implements OnInit {
  @Input('step') step: number = 1;
  @Output() increase: EventEmitter<any> = new EventEmitter<any>();

  public clicks: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.clicks = this.clicks + (+this.step);
    this.increase.emit({numClicks: this.clicks});
  }
}
