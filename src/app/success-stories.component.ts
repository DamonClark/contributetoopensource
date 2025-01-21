import { Component } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  template: `
    <div class="container mx-auto text-center my-8">
      <div class="bg-gray-100 p-8">
        <h3 class="text-3xl font-semibold mb-6">Success Stories</h3>
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold">{{ stories[0].name }}</h4>
            <p class="text-gray-700">{{ stories[0].contribution }}</p>
            <blockquote class="text-gray-500 italic">{{ stories[0].quote }}</blockquote>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-xl font-semibold">{{ stories[1].name }}</h4>
            <p class="text-gray-700">{{ stories[1].contribution }}</p>
            <blockquote class="text-gray-500 italic">{{ stories[1].quote }}</blockquote>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SuccessStoriesComponent {
  stories = [
    {
      name: 'Sarah',
      contribution: 'Fixed a CSS bug in Mozilla Firefox.',
      quote: '"It was a rewarding experience, and now I’m contributing to more projects!"'
    },
    {
      name: 'John',
      contribution: 'Added a new feature to a Python library.',
      quote: '"I started with small contributions and now I’m actively involved in the community!"'
    }
  ];
}
