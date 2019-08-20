import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// tslint:disable:typedef
const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule),
	},
	{
		path: '**',
		redirectTo: '/',
	},
];
// tslint:enable:typedef

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
