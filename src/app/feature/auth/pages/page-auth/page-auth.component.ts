import { Component } from '@angular/core';
import { ChooseColor } from 'src/app/core/models/color.interface';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
	selector: 'app-auth',
	templateUrl: './page-auth.component.html',
	styleUrls: ['./page-auth.component.scss'],
})
export class PageAuthComponent {
	public show: boolean = false;
	public itemsArr: string[] = ['blog', 'projects', 'about', 'contact'];
	public currentColor: ChooseColor;

	constructor(private menuService: MenuService) {}

	public hideAnim(): void {
		this.show = false;
	}

	public changeColor(item: string): void {
		switch (item) {
			case 'blog':
				this.currentColor = ChooseColor.g;
				break;

			case 'projects':
				this.currentColor = ChooseColor.y;
				break;

			case 'about':
				this.currentColor = ChooseColor.o;
				break;

			case 'contact':
				this.currentColor = ChooseColor.b;
				break;
			default:
				this.currentColor = ChooseColor.black;
		}
	}

	public removeColor(): void {
		this.currentColor = ChooseColor.black;
	}
}
