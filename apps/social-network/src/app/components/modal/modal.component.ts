import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "web-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  @Input() content = ""


  constructor(private activeModal: NgbActiveModal) {
  }

  close() {
    this.activeModal.close("result")
  }

  dismiss() {
    this.activeModal.dismiss(0)
  }
}
