import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '@app/profile/topics/about-me/about-me.component';
import { CertificationsComponent } from '@app/profile/topics/certifications/certifications.component';
import { ExperiencesComponent } from '@app/profile/topics/experiences/experiences.component';
import { FormationsComponent } from '@app/profile/topics/formations/formations.component';
import { SkillsComponent } from '@app/profile/topics/skills/skills.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';


import { PrimeModule } from './prime.modules';








@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,

    ExperiencesComponent,

    CertificationsComponent,

    FormationsComponent,

    SkillsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PrimeModule,
    ReactiveFormsModule
  ],


  //Só precisa colocar no export, quando está fora do app modules...
  exports: [
    HeaderComponent, FooterComponent, AboutMeComponent,

    ExperiencesComponent,

    CertificationsComponent,

    FormationsComponent,

    SkillsComponent,
  ],
})
export class SharedCommonModule { }
