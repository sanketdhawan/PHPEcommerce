import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { MediaComponent } from './pages/media/media.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';


export const routes: Routes = [
    { path: '', component: LoginComponent },  // Default route (login page)
    { path: 'register', component: RegisterComponent },  // Registration page
    { path: 'login', component: LoginComponent },  // Login page
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },  // Protected route
    { path: 'media', component: MediaComponent, canActivate: [AuthGuard] },  // Protected route
];