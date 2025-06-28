import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private api = '/api/resumes';

  constructor(private http: HttpClient) {}

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.api}/upload`, formData);
  }

  analyze(file: File, job: string, skills: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('job', job);
    formData.append('skills', skills);
    return this.http.post<{ score: number; summary: string }>(`${this.api}/analyze`, formData);
  }

  getAll() {
    return this.http.get(`${this.api}`);
  }
}
