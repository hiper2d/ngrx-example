import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {Item} from "../../common/model/item.model";
import {ItemsService} from "../../common/services/items.service";
import {BootStore} from "../../common/stores/boot.store";
import {Action} from "../../common/stores/reducers/action.enum";

@Component({
	selector: 'items',
	template: require('./items.component.html'),
})
export class ItemsComponent implements OnInit {
	items: Observable<Array<Item>>;
	selectedItem: Observable<Item>;
	
	constructor(private itemsService: ItemsService, private store: Store<BootStore>) {
		this.items = store.select<Array<Item>>('items');
		this.selectedItem = store.select<Item>('selectedItem');
	}
	
	ngOnInit(): void {
		this.itemsService.loadItems();
	}
	
	saveItem(item: Item) {
		this.itemsService.saveItem(item);
		this.resetItem();
	}
	
	selectItem(item: Item): void {
		this.store.dispatch({type: Action[Action.SELECT_ITEM], payload: item});
	}
	
	deleteItem(item: Item): void {
		this.itemsService.deleteItem(item);
	}
	
	resetItem() {
		let emptyItem: Item = {id: null, name: '', description: ''};
		this.store.dispatch({type: Action[Action.SELECT_ITEM], payload: emptyItem});
	}
}