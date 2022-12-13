import {Component, EventEmitter, Output} from "@angular/core"
import {UserService} from "../../shared/user.service"
import {Observable} from "rxjs"
import {Profile} from "../../models/profile"

@Component({
  selector: "web-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  user$: Observable<Profile | null>

  @Output() profileClick = new EventEmitter<MouseEvent>()

  constructor(private service: UserService) {
    this.user$ = service.getProfile()
  }
}
