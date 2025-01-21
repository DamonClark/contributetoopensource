import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  template: `
      <div class="container mx-auto text-center my-8">
        <div class="space-y-4">
          <div *ngFor="let faq of faqs" class="bg-white shadow-lg rounded-lg p-4">
            <h4 class="font-semibold text-lg text-blue-500">{{ faq.question }}</h4>
            <p class="mt-2 text-gray-700">{{ faq.answer }}</p>
          </div>
        </div>
    </div>
  `,
})
export class FaqComponent {
  faqs = [
    { question: 'How do I find a project to work on?', answer: 'Start by exploring repositories tagged with “good first issue” on GitHub.' },
    { question: 'What if I make a mistake?', answer: 'It’s okay! Open-source projects are welcoming, and you can always submit another pull request.' },
    { question: 'Do I need advanced coding skills?', answer: 'No! Many projects have issues that are beginner-friendly.' },
  ];
}
