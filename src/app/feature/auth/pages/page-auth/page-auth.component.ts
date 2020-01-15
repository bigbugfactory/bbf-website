import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
	selector: 'app-auth',
	templateUrl: './page-auth.component.html',
	styleUrls: ['./page-auth.component.scss'],
})
export class PageAuthComponent {
	public show: boolean = false;
	public removeStartAnim: boolean;
	public itemsArr: string[] = ['blog', 'projects', 'about', 'contact'];
	public fullColor: string;

	constructor(private menuService: MenuService) {}

	public hideAnim(): void {
		this.show = false;
	}

	public change(): void {
		this.show = true;

		// this.menuService.changeColor();
	}
}
