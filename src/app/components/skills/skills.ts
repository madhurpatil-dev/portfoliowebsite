import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { skillGroups } from '../../data/portfolio.data';

@Component({
  imports: [RevealDirective],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class SkillsComponent {
  protected readonly skillGroups = skillGroups;
}
