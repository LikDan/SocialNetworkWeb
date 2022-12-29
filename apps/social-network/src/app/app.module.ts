import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {RouterModule, Routes} from "@angular/router"

import {AppComponent} from "./app.component"
import {HomeComponent} from "./components/home/home.component"
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import {UiElementsModule} from "@web/ui-elements"
import {NgbActiveModal, NgbModule} from "@ng-bootstrap/ng-bootstrap"
import {ReactiveFormsModule} from "@angular/forms"
import {ModalComponent} from "./components/modal/modal.component"
import {FeatureAuthModule} from "@web/feature-auth"
import {AuthComponent} from "./components/auth/auth.component"
import {AuthHttpInterceptor} from "../../../../libs/feature-user/src/lib/interceptors/auth-http.service"
import {LoggedInGuard} from "../../../../libs/feature-user/src/lib/guards/logged-in.guard"
import {FeatureUserModule} from "@web/feature-user"
import {HeaderComponent} from "./components/header/header.component"
import {FeedComponent} from "./components/home/feed/feed.component"
import {RequestsComponent} from "./components/home/requests/requests.component"
import {BrowseComponent} from "./components/home/browse/browse.component"
import {FeatureBrowseModule} from "@web/feature-browse"
import {FeatureSubscriptionsModule} from "@web/feature-subscriptions"

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "auth", component: AuthComponent, canActivate: [LoggedInGuard]},

  {path: "**", redirectTo: ""},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    AuthComponent,
    HeaderComponent,
    FeedComponent,
    RequestsComponent,
    BrowseComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    UiElementsModule,
    NgbModule,
    ReactiveFormsModule,
    FeatureAuthModule,
    FeatureUserModule,
    FeatureBrowseModule,
    FeatureSubscriptionsModule
  ],
  providers: [
    NgbActiveModal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
