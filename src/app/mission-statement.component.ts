import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-statement',
  template: `
  <section class="hero bg-blue-500 text-white text-center py-10">
    <h1 class="text-6xl font-bold mb-10">Contribute to Open Source</h1>
    <p class="text-2xl mb-6"> Discover the joy of contributing to open-source projects, no matter your skill level.
      <br/>We guide you every step of the way—from learning the basics to making your first pull request.</p>
    <button class="bg-white text-blue-500 px-6 py-3 rounded hover:bg-gray-100">Get Started</button>
  </section>
  `,
})

export class MissionStatementComponent { }
