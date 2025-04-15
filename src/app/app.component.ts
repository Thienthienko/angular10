import {Component, EventEmitter, Input, Output} from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'WILD BLOG';

  changeTitle() {
    this.title = 'NEW WILD BLOG';
  }


  @Input() message: string ='';
  @Output() notify = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('Hello parent!');
  }
}
