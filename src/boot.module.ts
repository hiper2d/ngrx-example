import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {selectedItem} from "./common/stores/reducers/selected-item.reducer";
import {items} from "./common/stores/reducers/items.reducer";
import {ItemsService} from "./common/services/items.service";
import {BootComponent} from "./widgets/boot.component";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";
import {routes} from "./boot.routes";
import {ItemsComponent} from "./widgets/items/items.component";
import {ItemDetailComponent} from "./widgets/items/item-detail.component";
import {ItemListComponent} from "./widgets/items/item-list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(routes),
		StoreModule.provideStore({items, selectedItem}),
		StoreDevtoolsModule.instrumentStore({
			monitor: useLogMonitor({
				visible: false,
				position: 'right'
			})
		}),
		StoreLogMonitorModule
	],
	declarations: [
		BootComponent,
		ItemsComponent,
		ItemListComponent,
		ItemDetailComponent
	],
	providers: [
		ItemsService
	],
	bootstrap: [BootComponent]
})
export class BootModule {
	
}