import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  imports: [RevealDirective],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class AboutComponent {}
