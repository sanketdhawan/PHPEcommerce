import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://mediumvioletred-swallow-606356.hostingersite.com/web_api';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkAuthenticationStatus();
  }

  setToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('jwtToken', token);
      this.isAuthenticatedSubject.next(true);
    }
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }

  clearToken(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('jwtToken');
      this.isAuthenticatedSubject.next(false);
    }
  }

  checkAuthenticationStatus(): void {
    const token = this.getToken();
    if (token) {
      this.authenticateUser(token).subscribe({
        next: (response) => {
          console.log(response)
          if (response.message === 'Access granted') {
            this.isAuthenticatedSubject.next(true);
          } else {
            this.clearToken();
          }
        },
        error: () => {
          this.clearToken();
        }
      });
    }
  }

  initializeAuth(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.checkAuthenticationStatus();
      this.isAuthenticatedSubject.subscribe(() => {
        resolve();
      });
    });
  }

  isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  authenticateUser(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/authorize.php`, {}, { headers });
  }
}
