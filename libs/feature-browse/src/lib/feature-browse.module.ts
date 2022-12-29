import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {BrowseTableComponent} from "./components/browse-table/browse-table.component"
import {UiElementsModule} from "@web/ui-elements"

@NgModule({
  imports: [CommonModule, UiElementsModule],
  declarations: [BrowseTableComponent],
  exports: [
    BrowseTableComponent
  ]
})
export class FeatureBrowseModule {}
