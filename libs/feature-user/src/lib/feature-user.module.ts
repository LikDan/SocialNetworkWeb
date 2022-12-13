import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {ProfileComponent} from "./components/profile/profile.component"
import {UiElementsModule} from "@web/ui-elements"

@NgModule({
  imports: [CommonModule, UiElementsModule],
  declarations: [ProfileComponent],
  exports: [
    ProfileComponent
  ]
})
export class FeatureUserModule {}
