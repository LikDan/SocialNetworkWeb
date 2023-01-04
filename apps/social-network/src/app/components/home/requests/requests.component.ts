import {ChangeDetectionStrategy, Component} from "@angular/core"

@Component({
  selector: "web-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestsComponent {}
