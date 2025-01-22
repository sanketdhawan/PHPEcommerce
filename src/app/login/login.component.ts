import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { AuthService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbAlertModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  alertMessage: string = '';
  alertType: 'success' | 'danger' = 'success';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router 
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.alertType = 'danger';
      this.alertMessage = 'Please fill out the form correctly.';
      return;
    }

    const formData = this.loginForm.value;

    this.loginService.loginUser(formData).subscribe({
      next: (response) => {
        if (response.result === 'success') {
          this.alertType = 'success';
          this.alertMessage = 'Login successful!';
          this.loginForm.reset();
          this.authService.setToken(response.token); // Store JWT token
          this.router.navigate(['/products']); // Redirect after successful login
        } else {
          this.alertType = 'danger';
          this.authService.clearToken();
          this.alertMessage = response.message || 'Invalid email or password.';
        }
      },
      error: (error) => {
        console.error('Error:', error);
        this.alertType = 'danger';
        this.authService.clearToken();
        this.alertMessage = 'An error occurred. Please try again later.';
      }
    });
  }
}
