import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = 'http://localhost:8080/api/auth';

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.api}/login`, credentials).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  register(data: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.api}/register`, data).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get token() {
    return localStorage.getItem('token');
  }

  get isAuthenticated() {
    return !!this.token;
  }
}
