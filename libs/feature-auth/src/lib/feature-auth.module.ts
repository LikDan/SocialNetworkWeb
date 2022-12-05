import {NgModule} from "@angular/core"
import {CommonModule} from "@angular/common"
import {LoginComponent} from "./components/login/login.component"
import {ReactiveFormsModule} from "@angular/forms"
import {UiElementsModule} from "@web/ui-elements"
import {SignupComponent} from "./components/signup/signup.component"

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UiElementsModule],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent, SignupComponent],
})
export class FeatureAuthModule {}
