import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../_services/authentication.service';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
export const authGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$().pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        // Redirect to login if not authenticated
        router.navigate(['/login']);
        return false;
      }
      return true; // Allow access to authenticated routes
    }),
    catchError(() => {
      // Handle errors by redirecting to login
      router.navigate(['/login']);
      return of(false);
    })
  );
};
