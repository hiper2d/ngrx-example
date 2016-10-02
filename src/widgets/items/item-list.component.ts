import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item} from "../../common/model/item.model";

@Component({
	selector: 'item-list',
	template: require('./item-list.component.html')
})
export class ItemListComponent {
	@Input() items: Item[];
	@Output() selected = new EventEmitter();
	@Output() deleted = new EventEmitter();
}