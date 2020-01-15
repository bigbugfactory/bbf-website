import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackComponent } from './components/back/back.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
	declarations: [MenuItemComponent, BackComponent],
	imports: [CommonModule],
	exports: [MenuItemComponent, BackComponent],
})
export class SharedModule {}
