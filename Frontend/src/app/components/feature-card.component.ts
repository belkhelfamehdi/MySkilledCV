import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `
    <div class="bg-white dark:bg-gray-800 p-6 rounded shadow hover:scale-105 hover:ring-2 ring-indigo-600 transition-all duration-300">
      <h3 class="text-lg font-bold mb-2">{{title}}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300">{{description}}</p>
    </div>
  `
})
export class FeatureCardComponent {
  @Input() title = '';
  @Input() description = '';
}
