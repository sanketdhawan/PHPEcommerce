import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../_services/authentication.service';
import { catchError, map, switchMap } from 'rxjs/operators';

export const loginRegisterGuard = (): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Check if running in the browser
  if (isPlatformBrowser(platformId)) {
    const token = localStorage.getItem('jwtToken') || '';

    return authService.authenticateUser(token).pipe(
      switchMap((response) => {
        if (response.message === 'Access granted') {
          // User is authenticated, redirect to /products
          router.navigate(['/products']);
          return of(false); // Block access to login/register
        }
        return of(true); // Allow access to login/register
      }),
      catchError(() => {
        // In case of error, allow access to login/register
        return of(true);
      })
    );
  } else {
    // If not running in the browser, allow access to login/register
    return of(true);
  }
};
