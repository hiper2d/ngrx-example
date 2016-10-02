import {Routes} from "@angular/router";
import {ItemsComponent} from "./widgets/items/items.component";

export const routes: Routes = [
	{path: '', component: ItemsComponent},
	{path: 'items', component: ItemsComponent},
	{path: 'widgets', component: ItemsComponent}
]