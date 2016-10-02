import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store"
import {Observable} from "rxjs";
import {Item} from "../model/item.model";
import {BootStore} from "../stores/boot.store";
import {Action} from "../stores/reducers/action.enum";

@Injectable()
export class ItemsService {
	items: Observable<Array<Item>>;
	
	constructor(private store: Store<BootStore>) {
		this.items = store.select<Array<Item>>('items');
	}
	
	loadItems() {
		let initialItems:Item[] = [
			{id:0, name: 'Name 1', description: 'Description 1'},
			{id:1, name: 'Name 2', description: 'Description 2'},
			{id:2, name: 'Name 3', description: 'Description 3'},
			{id:3, name: 'Name 3', description: 'Description 3'},
			{id:4, name: 'Name 4', description: 'Description 4'},
			{id:5, name: 'Name 5', description: 'Description 5'},
			{id:6, name: 'Name 6', description: 'Description 6'},
			{id:7, name: 'Name 7', description: 'Description 7'},
			{id:8, name: 'Name 8', description: 'Description 8'},
			{id:9, name: 'Name 9', description: 'Description 9'},
		];
		this.store.dispatch({type: Action[Action.ADD_ITEM], payload: initialItems});
	}
	
	saveItem(item: Item) {
		(item.id !== null) ? this.updateItem(item) : this.createItem(item);
	}
	
	deleteItem(item:Item) {
		this.store.dispatch({type: Action[Action.DELETE_ITEM], payload: item});
	}
	
	private updateItem(item: Item) {
		this.store.dispatch({type: Action[Action.UPDATE_ITEM], payload: item});
	}
	
	private createItem(item: Item) {
		this.store.dispatch({type: Action[Action.CREATE_ITEM], payload: this.addUUID(item)});
	}
	
	private addUUID(item: Item): Item {
		return Object.assign({}, item, {id: this.generateUUID()}); // Avoiding state mutation FTW!
	}
	
	private generateUUID(): string {
		return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
			.replace(/1|0/g, function() {
				return (0 | Math.random() * 16).toString(16);
			});
	};
}