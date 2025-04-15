import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-test',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <form [formGroup]="loginForm">
      <input formControlName="email">
      <button [disabled]="!loginForm.valid">Submit</button>
    </form>
  `,
  styleUrl: './login-test.component.scss'
})
export class LoginTestComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
}
