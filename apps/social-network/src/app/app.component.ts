import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private route: Router) {
  }

  showHeader = (): boolean  => this.route.url !== "/auth"
}
