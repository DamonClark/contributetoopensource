import { Component } from '@angular/core';

@Component({
  selector: 'app-beginner-steps',
  template: `
    <div class="container mx-auto text-center my-8">
      <h1 class="text-4xl font-bold mb-4">Start Contributing to Open Source in 3 Easy Steps</h1>
      <p class="text-lg text-gray-600">Follow these simple steps to make your first contribution today.</p>
      <div class="flex justify-between py-10 space-x-4">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h4 class="text-2xl font-semibold text-gray-800">Learn the Basics</h4>
          <p class="text-gray-600 mt-2">Understand the basics of Git, GitHub, and contributing.</p>
          <a [href]="steps[0].link" target="_blank" class="text-blue-500 hover:text-blue-700 mt-4 inline-block">Learn More</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h4 class="text-2xl font-semibold text-gray-800">Pick a Project</h4>
          <p class="text-gray-600 mt-2">Find projects with issues labeled "good first issue".</p>
          <a [href]="steps[1].link" target="_blank" class="text-blue-500 hover:text-blue-700 mt-4 inline-block">Learn More</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h4 class="text-2xl font-semibold text-gray-800">Start Contributing</h4>
          <p class="text-gray-600 mt-2">Fork the repository, make changes, and submit a pull request.</p>
          <a [href]="steps[2].link" target="_blank" class="text-blue-500 hover:text-blue-700 mt-4 inline-block">Learn More</a>
        </div>
      </div>
    </div>
  `,
})
export class BeginnerStepsComponent {
  steps = [
    {
      title: 'Learn the Basics',
      description: 'Understand the basics of Git, GitHub, and contributing.',
      link: 'https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests'
    },
    {
      title: 'Pick a Project',
      description: 'Find projects with issues labeled "good first issue".',
      link: 'https://github.com/issues?q=is%3Aissue+label%3A"good+first+issue"'
    },
    {
      title: 'Start Contributing',
      description: 'Fork the repository, make changes, and submit a pull request.',
      link: 'https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request'
    }
  ];
}
