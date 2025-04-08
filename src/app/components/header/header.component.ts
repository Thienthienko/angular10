import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  public isAdmin: boolean = false;
  public isLogged: boolean = false;
  private role!: string | null;

  ngOnInit() {
    // Récupération du statut de connexion
    this.isLogged = this.authService.isLoggedIn();
    console.log('isLogged:', this.isLogged);

    // Récupération du rôle de l'utilisateur
    this.role = this.authService.getUserRole();
    console.log('Role:', this.role);

    // Vérification si l'utilisateur a le rôle 'ROLE_ADMIN'
    if (this.role === 'ROLE_ADMIN') {  // Vérification du rôle exact
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    console.log('isAdmin:', this.isAdmin);
  }

  // Fonction de logout
  public logout() {
    this.authService.clearToken(); // Déconnexion de l'utilisateur
    this.isLogged = false;
    this.isAdmin = false;
    this.router.navigate(['/login'])
  }
}
