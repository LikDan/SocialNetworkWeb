import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {RequestsTableComponent} from "./components/requests-table/requests-table.component"
import {UiElementsModule} from "@web/ui-elements"
import {SubscribersComponent} from "./components/subscribers/subscribers.component"

@NgModule({
  imports: [CommonModule, UiElementsModule],
  declarations: [RequestsTableComponent, SubscribersComponent],
  exports: [RequestsTableComponent, SubscribersComponent]
})
export class FeatureSubscriptionsModule {}
