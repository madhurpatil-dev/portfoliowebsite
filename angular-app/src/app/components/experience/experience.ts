import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { experience } from '../../data/portfolio.data';

@Component({
  imports: [RevealDirective],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class ExperienceComponent {
  protected readonly experience = experience;
}
