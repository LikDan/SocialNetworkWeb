import {Component, OnDestroy, OnInit} from "@angular/core"
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"
import {Router} from "@angular/router"
import {Subscription} from "rxjs"
import {UserService} from "../../../../../../libs/feature-user/src/lib/shared/user.service"

@Component({
  selector: "web-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnDestroy, OnInit {
  profile$: Subscription

  constructor(private modalService: NgbModal, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.profile$ = this.userService.getProfile().subscribe({
      next: profile => {
        if (profile != null) return
        this.router.navigate(["auth"]).then()
      }
    })
  }

  ngOnDestroy(): void {
    this.profile$.unsubscribe()
  }
}
