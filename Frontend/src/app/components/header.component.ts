import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <a routerLink="/" class="text-2xl font-bold text-indigo-600">MySkilledCV</a>
      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <a routerLink="/#features" class="hover:text-indigo-600 transition-colors">Features</a>
        <a routerLink="/#pricing" class="hover:text-indigo-600 transition-colors">Pricing</a>
        <a routerLink="/#contact" class="hover:text-indigo-600 transition-colors">Contact</a>
      </nav>
      <div class="flex gap-4">
        <a routerLink="/login" class="px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Login</a>
        <a routerLink="/register" class="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Register</a>
      </div>
    </header>
  `
})
export class HeaderComponent {}
