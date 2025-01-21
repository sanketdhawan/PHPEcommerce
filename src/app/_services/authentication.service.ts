import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated(): Observable<boolean> {
    return this.authenticatedSubject.asObservable();
  }

  login(): void {
    this.authenticatedSubject.next(true);
  }

  logout(): void {
    this.authenticatedSubject.next(false);
  }
}
