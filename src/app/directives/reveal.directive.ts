import { afterNextRender, Directive, DestroyRef, ElementRef, inject } from '@angular/core';
import { RevealService } from '../services/reveal.service';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealDirective {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly revealService = inject(RevealService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const cleanup = this.revealService.observe(this.element.nativeElement);
      this.destroyRef.onDestroy(cleanup);
    });
  }
}
