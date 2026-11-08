import { DOCUMENT } from '@angular/common';
import { afterNextRender, Component, HostListener, inject, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  styleUrl: './back-to-top.scss',
  templateUrl: './back-to-top.html',
})
export class BackToTopComponent {
  protected readonly visible = signal(false);
  private readonly document = inject(DOCUMENT);
  private frame = 0;

  constructor() {
    afterNextRender(() => this.scheduleVisibilityUpdate());
  }

  @HostListener('window:scroll')
  protected scheduleVisibilityUpdate(): void {
    const view = this.document.defaultView;
    if (!view || this.frame) {
      return;
    }

    this.frame = view.requestAnimationFrame(() => {
      this.frame = 0;
      const footer = this.document.querySelector<HTMLElement>('.site-footer');
      const footerIsVisible =
        footer !== null && footer.getBoundingClientRect().top < view.innerHeight;
      this.visible.set(view.scrollY > 300 && !footerIsVisible);
    });
  }

  protected scrollToTop(): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }

    const reduceMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
    view.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    this.document.querySelector<HTMLElement>('.site-header .brand')?.focus({ preventScroll: true });
  }
}
