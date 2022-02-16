import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs';
import { AppMainComponent } from './app.main.components';
import { MenuItems } from './config/models/menu-item.model';
import { menuItems } from './shared/helpers/menu-items-options';





@Component({
	selector: 'app-menu',
	template: `
		<div class="layout-menu-container">
			<ul class="layout-menu mt-3" role="menu" (keydown)="onKeydown($event)">
				<li
					app-menu
					class="layout-menuitem-category"
					*ngFor="let item of menuItems; let i = index"
					[item]="item"
					[index]="i"
					[root]="true"
					role="none"
				>
					<div class="layout-menuitem-root-text" [attr.aria-label]="item.label">
						{{ item.label }}
					</div>
					<ul role="menu">
						<li
							app-menuitem
							*ngFor="let child of item.items"
							[item]="child"
							[index]="i"
							role="none"
						></li>
					</ul>
				</li>
			</ul>
		</div>
	`,
})
export class AppMenuComponent implements OnInit {
	menuItems: MenuItems[];

	user$: Observable<string>;

	constructor(
		public appMain: AppMainComponent,
	) {}

	ngOnInit() {

		this.menuItems = menuItems;
	}

	onKeydown(event: KeyboardEvent) {
		const nodeElement = <HTMLDivElement>event.target;
		if (event.code === 'Enter' || event.code === 'Space') {
			nodeElement.click();
			event.preventDefault();
		}
	}
}
