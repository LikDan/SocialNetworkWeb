import { Component, Input } from "@angular/core";

@Component({
  selector: "web-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  @Input() content = ""
}
