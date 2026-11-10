import { DOCUMENT } from '@angular/common';
import { Service, inject } from '@angular/core';

@Service()
export class RevealService {
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;

  observe(element: HTMLElement): () => void {
    const view = this.document.defaultView;
    if (
      !view ||
      view.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in view)
    ) {
      element.classList.add('is-visible');
      return () => undefined;
    }

    this.observer ??= new view.IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -48px 0px', threshold: 0.08 },
    );
    this.document.documentElement.classList.add('motion-ready');
    this.observer.observe(element);
    return () => this.observer?.unobserve(element);
  }
}
