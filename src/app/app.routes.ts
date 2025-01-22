import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MediaComponent } from './pages/media/media.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './_guards/auth.guard';
import { loginRegisterGuard } from './_guards/loginandregister.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [loginRegisterGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginRegisterGuard],
  },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'media', component: MediaComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
