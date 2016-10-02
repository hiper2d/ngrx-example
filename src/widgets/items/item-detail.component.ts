import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Item} from "../../common/model/item.model";

@Component({
	selector: 'item-detail',
	template: require('./item-detail.component.html')
})
export class ItemDetailComponent {
	@Output() saved = new EventEmitter();
	@Output() cancelled = new EventEmitter();
	originalName: string;
	private _selectedItem: Item;
	
	get selectedItem() {
		return this._selectedItem;
	}
	
	@Input()
	set selectedItem(value: Item) {
		if (value !== null) {
			this.originalName = value.name;
		}
		this._selectedItem = Object.assign({}, value);
	}
}