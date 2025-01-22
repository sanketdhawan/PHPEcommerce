import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MediaComponent } from './pages/media/media.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginRegisterGuard } from './_guards/loginandregister.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginRegisterGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginRegisterGuard],
  },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'media', component: MediaComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
