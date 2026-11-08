import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('Madhur Patil — Java Backend Engineer');
    this.meta.updateTag({
      name: 'description',
      content:
        'Madhur Patil is a Java Backend Engineer building reliable services, microservices, and thoughtful software products.',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Madhur Patil — Java Backend Engineer',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Backend engineering with Java, Spring Boot, and distributed systems.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://madhurpatilportfolio.netlify.app/',
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
}
