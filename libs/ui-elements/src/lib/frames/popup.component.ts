import { Component } from "@angular/core";

@Component({
  selector: "web-popup",
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      background: #FFFFFF;
      box-shadow: 0 3px 25px rgba(27, 29, 35, 0.2);
      border-radius: 16px;
    }
  `]
})
export class PopupComponent {
}
