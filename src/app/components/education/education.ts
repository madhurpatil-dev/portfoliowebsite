import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { education } from '../../data/portfolio.data';

@Component({
  imports: [RevealDirective],
  selector: 'app-education',
  styleUrl: './education.scss',
  templateUrl: './education.html',
})
export class EducationComponent {
  protected readonly education = education;
}
