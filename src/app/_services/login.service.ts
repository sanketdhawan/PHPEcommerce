import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://mediumvioletred-swallow-606356.hostingersite.com/web_api/login.php'; // Update with your API endpoint

  constructor(private http: HttpClient) { }

  loginUser(userData: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
