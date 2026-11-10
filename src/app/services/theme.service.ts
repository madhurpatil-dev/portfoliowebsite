import { DOCUMENT } from '@angular/common';
import { Service, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Service()
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly isLight = signal(this.document.documentElement.getAttribute('data-theme') === 'light');

  toggle(): void {
    this.setTheme(this.isLight() ? 'dark' : 'light');
  }

  private setTheme(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    this.isLight.set(theme === 'light');
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f6f5f0' : '#141a18');
  }
}
