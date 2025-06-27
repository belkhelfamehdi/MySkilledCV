import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-card',
  standalone: true,
  template: `
    <div class="flex flex-col items-center text-center gap-2">
      <div class="text-4xl font-bold text-indigo-600">{{step}}</div>
      <h4 class="font-semibold">{{title}}</h4>
      <p class="text-sm text-gray-600 dark:text-gray-300">{{description}}</p>
    </div>
  `
})
export class StepCardComponent {
  @Input() step = 1;
  @Input() title = '';
  @Input() description = '';
}
