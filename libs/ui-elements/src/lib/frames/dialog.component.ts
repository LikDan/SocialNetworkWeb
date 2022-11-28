import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "web-dialog",
  template: `
    <header>
      <h4>{{title | titlecase}}</h4>
      <button webCircleBtn webSecondaryBtn><img src="assets/cross.svg" alt="close"></button>
    </header>
    <main>
      <ng-content></ng-content>
    </main>
    <footer>
      <button webSecondaryBtn (click)="cancel.emit($event)">{{secondaryButtonText}}</button>
      <button webPrimaryBtn (click)="confirm.emit($event)">{{primaryButtonText}}</button>
    </footer>`,
  styles: [`
    :host {
      display: flex;
      flex-flow: column;

      background: #FFFFFF;
      box-shadow: 0 3px 25px rgba(27, 29, 35, 0.2);
      border-radius: 16px;
    }

    h4 {
      margin: 0;
    }

    header button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 14px 16px 14px 24px;
    }

    main {
      flex-grow: 1;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      gap: 10px;
      padding: 16px 24px;

      box-shadow: 0 3px 10px rgba(27, 29, 35, 0.2);
      border-radius: 0 0 16px 16px; /*or add overflow: hidden to: host*/
    }
  `]
})
export class DialogComponent {
  @Input() title = "";
  @Input() primaryButtonText = "Submit";
  @Input() secondaryButtonText = "Cancel";

  @Output() cancel = new EventEmitter<MouseEvent>();
  @Output() confirm = new EventEmitter<MouseEvent>();
}
