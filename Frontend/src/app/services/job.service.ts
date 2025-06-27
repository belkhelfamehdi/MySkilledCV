import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JobService {
  private api = '/api/jobs';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.api}`);
  }
}
