import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';

@NgModule({
	declarations: [PageAuthComponent],
	imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
