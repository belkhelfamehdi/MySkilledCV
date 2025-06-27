import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header.component';
import { FeatureCardComponent } from '../../components/feature-card.component';
import { StepCardComponent } from '../../components/step-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FeatureCardComponent, StepCardComponent],
  template: `
    <app-header></app-header>
    <section class="text-center py-20 bg-gray-50 dark:bg-gray-800">
      <h1 class="text-4xl font-bold mb-4">AI-Powered Resume Analysis</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">Improve your hiring process and land your dream job.</p>
      <a routerLink="/register" class="px-6 py-3 bg-indigo-600 text-white rounded hover:scale-105 transition-all duration-300">Get Started</a>
    </section>
    <section id="features" class="py-12 px-6 grid md:grid-cols-3 gap-6">
      <app-feature-card title="Upload Resumes" description="Easily upload PDF resumes for analysis"></app-feature-card>
      <app-feature-card title="AI Insights" description="Leverage AI to rank and score candidates"></app-feature-card>
      <app-feature-card title="Job Management" description="Track job listings and candidates"></app-feature-card>
    </section>
    <section id="how" class="py-12 bg-gray-100 dark:bg-gray-900 px-6 grid md:grid-cols-3 gap-6 text-center">
      <app-step-card [step]="1" title="Create Job" description="Add job details and required skills"></app-step-card>
      <app-step-card [step]="2" title="Upload CVs" description="Drag and drop resumes into the dashboard"></app-step-card>
      <app-step-card [step]="3" title="Get Insights" description="View ranking and AI suggestions"></app-step-card>
    </section>
    <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400">© 2025 MySkilledCV</footer>
  `
})
export class HomeComponent {}
