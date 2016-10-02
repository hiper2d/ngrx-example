import {Item} from "../model/item.model";

export interface BootStore {
	items: Item[],
	selectedItem: Item
}