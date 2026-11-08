import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { HeaderComponent } from './header';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('opens the mobile menu and closes it on Escape', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();

    const toggle = fixture.nativeElement.querySelector('.menu-toggle') as HTMLButtonElement;
    const focus = vi.spyOn(toggle, 'focus');
    toggle.click();
    fixture.detectChanges();

    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelector('.nav-menu').classList).toContain('is-open');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(focus).toHaveBeenCalled();
  });
});
