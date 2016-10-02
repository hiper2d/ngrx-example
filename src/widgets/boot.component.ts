import {Component} from "@angular/core";

@Component({
	selector: 'boot',
	template: require('./boot.component.html')
})
export class BootComponent {
	links = {
		items: ['/items'],
		widgets: ['/widgets']
	};
}