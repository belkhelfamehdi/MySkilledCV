import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  standalone: true,
  template: `
    <div class="p-4 border rounded flex justify-between items-center hover:ring-2 ring-indigo-600 transition-all duration-300">
      <div>
        <h4 class="font-semibold">{{name}}</h4>
        <p class="text-sm text-gray-600 dark:text-gray-300">Score: {{score}}</p>
      </div>
      <button class="text-indigo-600 hover:underline" (click)="view.emit()">View</button>
    </div>
  `
})
export class ResumeCardComponent {
  @Input() name = '';
  @Input() score?: number;
  @Output() view = new EventEmitter<void>();
}
