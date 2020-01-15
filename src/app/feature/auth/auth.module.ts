import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';

@NgModule({
	declarations: [PageAuthComponent, ContactComponent, AboutComponent, ProjectsComponent],
	imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
