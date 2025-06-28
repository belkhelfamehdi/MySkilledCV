import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <aside class="w-64 bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      <nav class="flex flex-col gap-4 text-sm">
        <a routerLink="." class="font-semibold" routerLinkActive="text-indigo-600">Dashboard</a>
        <a *ngIf="role === 'company'" routerLink="jobs" routerLinkActive="text-indigo-600">Job Postings</a>
        <a *ngIf="role === 'company'" routerLink="candidates" routerLinkActive="text-indigo-600">Candidates</a>
        <a routerLink="settings" routerLinkActive="text-indigo-600">Settings</a>
      </nav>
    </aside>
  `
})
export class SidebarComponent {
  @Input() role: 'company' | 'user' = 'user';
}
