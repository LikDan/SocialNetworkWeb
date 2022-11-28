import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "web-dialog",
  templateUrl: "dialog.component.html",
  styleUrls: ["dialog.component.scss"]
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
