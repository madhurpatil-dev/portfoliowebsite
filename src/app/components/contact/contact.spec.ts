import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
  });

  it('renders the Netlify form with labeled, required contact fields', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    expect(form.getAttribute('data-netlify')).toBe('true');
    expect(form.getAttribute('netlify-honeypot')).toBe('bot-field');
    expect(form.querySelector<HTMLInputElement>('input[name="name"]')?.required).toBe(true);
    expect(form.querySelector<HTMLInputElement>('input[name="email"]')?.type).toBe('email');
    expect(form.querySelector<HTMLTextAreaElement>('textarea[name="message"]')?.required).toBe(
      true,
    );
  });
});
