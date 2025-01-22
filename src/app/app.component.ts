import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Router } from '@angular/router';
import { AuthService } from './_services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    LogoComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin';
  isAuthenticated$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$();
  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }
}
