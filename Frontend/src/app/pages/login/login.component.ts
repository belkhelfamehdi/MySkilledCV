import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="flex justify-center items-center py-20">
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="bg-white dark:bg-gray-800 p-6 rounded shadow w-full max-w-md flex flex-col gap-4">
        <h1 class="text-2xl font-bold mb-2">Login</h1>
        <input formControlName="email" type="email" placeholder="Email" class="p-2 border rounded" />
        <input formControlName="password" type="password" placeholder="Password" class="p-2 border rounded" />
        <button type="submit" class="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Login</button>
      </form>
    </div>
  `
})
export class LoginComponent {
  form: ReturnType<FormBuilder['group']>;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    this.auth.login(this.form.value).subscribe(() => this.router.navigate(['/dashboard']));
  }
}
