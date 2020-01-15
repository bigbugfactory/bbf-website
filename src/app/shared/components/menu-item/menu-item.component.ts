import { Component, Input } from '@angular/core';
import { ColorState } from 'src/app/core/models/color.interface';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
	@Input() public name: string;
	@Input() public href: string;
	@Input() public color: string;

	public currentColor: ColorState;

	constructor() {}
}
