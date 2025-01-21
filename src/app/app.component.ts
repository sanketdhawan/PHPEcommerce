import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './pages/products/products.component';
import { Router } from '@angular/router';
import { AuthService } from './_services/authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LogoComponent,
    SidebarComponent,
    ProductsComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'admin';
  isAuthenticated: boolean = false; constructor(private router: Router, private authService: AuthService) { this.authService.isAuthenticated().subscribe((status) => { this.isAuthenticated = status; console.log('Authenticated:', status); }); } logout(): void {
    this.authService.logout(); this.router.navigate(['/login']);

  }
}
