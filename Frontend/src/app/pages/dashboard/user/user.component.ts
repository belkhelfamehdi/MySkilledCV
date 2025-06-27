import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar.component';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ReactiveFormsModule],
  template: `
    <div class="flex">
      <app-sidebar role="user"></app-sidebar>
      <main class="flex-1 p-6 grid gap-6">
        <h1 class="text-2xl font-bold">Your CV</h1>
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 border rounded p-4">
          <input type="file" (change)="onFile($event)" />
          <input formControlName="job" type="text" placeholder="Target Job" class="p-2 border rounded" />
          <textarea formControlName="skills" placeholder="Required Skills" class="p-2 border rounded"></textarea>
          <button class="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Analyze</button>
        </form>
        <div *ngIf="result" class="border rounded p-4">
          <h2 class="font-semibold mb-2">AI Result</h2>
          <p>Score: {{result.score}}</p>
          <p>{{result.summary}}</p>
        </div>
      </main>
    </div>
  `
})
export class UserDashboardComponent {
  form: ReturnType<FormBuilder['group']>;
  file?: File;
  result?: { score: number; summary: string };
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      job: ['', Validators.required],
      skills: ['', Validators.required],
    });
  }
  onFile(e: Event) {
    const input = e.target as HTMLInputElement;
    this.file = input.files?.[0];
  }
  onSubmit() {
    if (this.form.invalid || !this.file) return;
    this.result = { score: 90, summary: 'Great fit for the position!' };
  }
}
