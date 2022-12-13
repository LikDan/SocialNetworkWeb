import {Component, HostBinding, Input} from "@angular/core"

@Component({
  selector: "web-secondary-icon-button",
  templateUrl: "./secondary-icon-button.component.html",
  styleUrls: ["./secondary-icon-button.component.scss"],
})
export class SecondaryIconButtonComponent {
  @Input() src: string
  @Input() alt: string

  @HostBinding('class') cls = "btn btn-secondary"
}
