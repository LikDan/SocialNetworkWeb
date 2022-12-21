import {ChangeDetectionStrategy, Component} from "@angular/core"
import {UserService} from "../../../../../../libs/feature-user/src/lib/shared/user.service"
import {Profile} from "../../../../../../libs/feature-user/src/lib/models/profile"
import {Observable} from "rxjs"

@Component({
  selector: "web-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private userService: UserService) {
  }

  get profile$(): Observable<Profile | null> {
    return this.userService.getProfile()
  }

  logout(): void {
    this.userService.logout()
  }
}
