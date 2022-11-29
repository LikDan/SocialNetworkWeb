import { Component, EventEmitter, Input, Output } from "@angular/core";

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

  @Output() closeModal = new EventEmitter()
  @Output() dismissModal = new EventEmitter()
}
