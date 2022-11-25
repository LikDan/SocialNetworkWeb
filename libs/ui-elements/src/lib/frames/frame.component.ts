import { Component } from "@angular/core";

@Component({
  selector: "web-frame",
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      background: #FFFFFF;
      box-shadow: 0 1px 16px rgba(0, 0, 0, 0.08);
      border-radius: 16px;
    }
  `]
})
export class FrameComponent {
}
