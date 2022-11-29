import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "web-modal-frame",
  templateUrl: "modal-frame.component.html",
  styleUrls: ["modal-frame.component.scss"]
})
export class ModalFrameComponent {
  @Input() title = "";
  @Input() primaryButtonText = "Submit";
  @Input() primaryButtonActive = true;
  @Input() secondaryButtonText = "Cancel";
  @Input() secondaryButtonEnabled = true;

  constructor(public activeModal: NgbActiveModal) {
  }
}
