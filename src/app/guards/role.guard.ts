import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const roleGuard: (expectedRole: string) => CanActivateFn = (expectedRole) => () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn() && authService.getUserRole() === expectedRole) {
    return true;
  } else {
    router.navigate(['/login']);
    return false
  }
};
