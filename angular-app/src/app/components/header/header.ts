import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { navigationLinks } from '../../data/portfolio.data';
import { ThemeService } from '../../services/theme.service';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);
  protected readonly navigationLinks = navigationLinks;
  protected readonly theme = inject(ThemeService);
  private readonly element = inject(ElementRef<HTMLElement>);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected closeOnEscape(): void {
    if (!this.menuOpen()) {
      return;
    }

    this.closeMenu();
    const toggle = this.element.nativeElement.querySelector(
      '.menu-toggle',
    ) as HTMLButtonElement | null;
    toggle?.focus();
  }

  @HostListener('window:resize')
  protected closeOnDesktopResize(): void {
    if (window.matchMedia('(min-width: 721px)').matches) {
      this.closeMenu();
    }
  }
}
