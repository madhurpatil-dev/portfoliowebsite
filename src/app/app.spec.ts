import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { App } from './app';

describe('App', () => {
  it('sets portfolio page metadata', async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(document.title).toBe('Madhur Patil — Java Backend Engineer');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Java Backend Engineer',
    );
  });
});
