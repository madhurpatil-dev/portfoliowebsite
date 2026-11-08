import { Component } from '@angular/core';
import { AboutComponent } from '../components/about/about';
import { BackToTopComponent } from '../components/back-to-top/back-to-top';
import { ContactComponent } from '../components/contact/contact';
import { EducationComponent } from '../components/education/education';
import { ExperienceComponent } from '../components/experience/experience';
import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';
import { HeroComponent } from '../components/hero/hero';
import { ProjectsComponent } from '../components/projects/projects';
import { SkillsComponent } from '../components/skills/skills';

@Component({
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  selector: 'app-home-page',
  templateUrl: './home.page.html',
})
export class HomePage {}
