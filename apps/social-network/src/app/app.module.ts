import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {RouterModule, Routes} from "@angular/router"

import {AppComponent} from "./app.component"
import {HomeComponent} from "./components/home/home.component"
import {HttpClientModule} from "@angular/common/http"
import {UiElementsModule} from "@web/ui-elements"
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap"
import {ReactiveFormsModule} from "@angular/forms"
import {ModalComponent} from "./components/modal/modal.component"
import { FeatureAuthModule } from "@web/feature-auth";

const routes: Routes = [{path: "", component: HomeComponent}]

@NgModule({
  declarations: [AppComponent, HomeComponent, ModalComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    UiElementsModule,
    NgbModule,
    ReactiveFormsModule,
    FeatureAuthModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
