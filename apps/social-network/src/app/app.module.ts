import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { UiElementsModule } from "@web/ui-elements";

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(routes), UiElementsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
