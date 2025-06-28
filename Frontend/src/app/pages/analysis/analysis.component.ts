import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 max-w-xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Résultat de l'analyse IA</h1>
      <p *ngIf="!result">Aucun résultat.</p>
      <div *ngIf="result" class="space-y-2">
        <p class="font-semibold">Score: {{ result.score }}</p>
        <p>{{ result.summary }}</p>
      </div>
      <button (click)="back()" class="mt-4 bg-indigo-600 text-white py-2 px-4 rounded">Retour</button>
    </div>
  `
})
export class AnalysisComponent {
  result: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.result = nav?.extras.state;
  }

  back() {
    this.router.navigate(['/dashboard/user']);
  }
}
