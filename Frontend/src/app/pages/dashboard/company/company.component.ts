import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar.component';
import { ResumeCardComponent } from '../../../components/resume-card.component';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ResumeCardComponent],
  template: `
    <div class="flex">
      <app-sidebar role="company"></app-sidebar>
      <main class="flex-1 p-6 grid gap-6">
        <h1 class="text-2xl font-bold">Company Dashboard</h1>
        <section class="border rounded p-4">
          <h2 class="font-semibold mb-2">Uploaded Resumes</h2>
          <app-resume-card name="John Doe" [score]="85"></app-resume-card>
        </section>
      </main>
    </div>
  `
})
export class CompanyDashboardComponent {}
