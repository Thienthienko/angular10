import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    '<h1>{{message}}</h1>
    <button (click)="sendNotification()">Notify</button>
    `,
  styleUrl: './child.component.scss'
})
export class ChildComponent {
@Input() message: string = '';
@Output() notify = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('Hello parent!');
  }
}
