import { Routes } from '@angular/router';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {authGuard} from "./guards/auth.guard";
import {roleGuard} from "./guards/role.guard";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {visitorOnlyGuard} from "./guards/visitor-only.guard";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'article/:id',
    component: ArticlePageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent,
    canActivate: [visitorOnlyGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [visitorOnlyGuard]
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [roleGuard('ROLE_ADMIN')]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
