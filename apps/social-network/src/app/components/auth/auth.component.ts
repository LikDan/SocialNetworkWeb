import {Component, OnDestroy} from "@angular/core"
import {UserService} from "../../../../../../libs/feature-user/src/lib/shared/user.service"
import {AuthToken} from "../../../../../../libs/feature-auth/src/lib/models/token"
import {Subscription} from "rxjs"
import {Router} from "@angular/router"

@Component({
  selector: "web-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnDestroy{
  loginMode = true
  profile$: Subscription

  constructor(private service: UserService, private router: Router) {
  }

  saveToken(remember: boolean, token: AuthToken): void {
    this.service.saveToken(remember, token)
    this.profile$ = this.service.loadProfile().subscribe({
      next: profile => {
        if (profile == undefined) return
        this.router.navigate([""]).then()
      }
    })
  }

  ngOnDestroy(): void {
    this.profile$.unsubscribe()
  }
}
