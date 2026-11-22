import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('Madhur Patil — AI-Native Full Stack Developer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Madhur Patil is an AI-Native Full Stack Developer building reliable services, web applications, and thoughtful software products.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Madhur Patil — AI-Native Full Stack Developer',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'AI-native full stack development with Java, Spring Boot, Angular, and distributed systems.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://madhurpatilportfolio.netlify.app/',
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
}
