import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, HttpClientModule, NgbAlertModule, ReactiveFormsModule],
})
export class RegisterComponent {
  registerForm: FormGroup;
  alertMessage: string = '';
  alertType: 'success' | 'danger' = 'success';

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.alertType = 'danger';
      this.alertMessage = 'Please fill out the form correctly.';
      return;
    }

    const formData = this.registerForm.value;

    this.registerService.registerUser(formData).subscribe(
      (response) => {
        if (response.result === 'success') {
          this.alertType = 'success';
          this.alertMessage = 'Registration successful!';
          this.registerForm.reset();
        } else {
          this.alertType = 'danger';
          this.alertMessage = response.message || 'Registration failed. Please try again.';
        }
      },
      (error) => {
        console.error('Error:', error);
        this.alertType = 'danger';
        this.alertMessage = 'Registration failed. Please try again.';
      }
    );
  }
}
