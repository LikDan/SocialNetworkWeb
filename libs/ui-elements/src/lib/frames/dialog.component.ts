import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "web-dialog",
  template: `
    <ng-template #dialog let-modal>
      <header>
        <h4>{{title | titlecase}}</h4>
        <button webCircleBtn webSecondaryBtn (click)="modal.dismiss(0)"><img src="assets/cross.svg" alt="close">
        </button>
      </header>
      <main>
        <ng-content></ng-content>
      </main>
      <footer>
        <button
          webSecondaryBtn
          (click)="modal.dismiss(0)"
        >{{secondaryButtonText}}</button>
        <button
          webPrimaryBtn
          (click)="modal.dismiss(1)"
          [disabled]="!primaryButtonActive"
        >{{primaryButtonText}}</button>
      </footer>
    </ng-template>`,
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
      padding: 10px;

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
  @Input() primaryButtonActive = true;
  @Input() secondaryButtonText = "Cancel";

  @ViewChild("dialog") dialogRef: ElementRef;

  constructor(private modalService: NgbModal) {
  }

  open(): Promise<number> {
    return this.modalService.open(this.dialogRef).result;
  }
}
