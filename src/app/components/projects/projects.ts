import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { projects } from '../../data/portfolio.data';

@Component({
  imports: [NgOptimizedImage, RevealDirective],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  protected readonly projects = projects;
}
