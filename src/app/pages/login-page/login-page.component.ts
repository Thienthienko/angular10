import {Component, inject} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule, CommonModule
    ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  user = {
    email: '',
    password: '',
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit(form: NgForm) {
    console.log('Form submitted ✅', form.value);
    if (form.valid) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: () => {
          this.router.navigate(['/profile']).then(() => {
            window.location.reload();  // Forcer le rafraîchissement de la page
          });
        },
        error: () => alert('Email ou mot de passe incorrect'),
      });
    }
  }
}
