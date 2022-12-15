import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {ProfileComponent} from "./components/profile/profile.component"
import {UiElementsModule} from "@web/ui-elements"
import {ProfileEditModalComponent} from "./components/profile-edit-modal/profile-edit-modal.component"
import {ReactiveFormsModule} from "@angular/forms"

@NgModule({
  imports: [CommonModule, UiElementsModule, ReactiveFormsModule],
  declarations: [ProfileComponent, ProfileEditModalComponent],
  exports: [ProfileComponent],
})
export class FeatureUserModule {}
