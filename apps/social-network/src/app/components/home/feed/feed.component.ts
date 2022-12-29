import {ChangeDetectionStrategy, Component} from "@angular/core"

@Component({
  selector: "web-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent {}
