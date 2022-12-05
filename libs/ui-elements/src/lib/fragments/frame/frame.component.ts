import {ChangeDetectionStrategy, Component} from "@angular/core"

@Component({
  selector: "web-frame",
  templateUrl: "frame.component.html",
  styleUrls: ["frame.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameComponent {
}
