import {Component, OnDestroy, OnInit} from "@angular/core"
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"
import {Router} from "@angular/router"
import {Subscription} from "rxjs"
import {UserService} from "../../../../../../libs/feature-user/src/lib/shared/user.service"
import {MenuItem} from "@web/ui-elements"
import {
  ProfileEditModalComponent
} from "../../../../../../libs/feature-user/src/lib/components/profile-edit-modal/profile-edit-modal.component"

@Component({
  selector: "web-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnDestroy, OnInit {
  profile$: Subscription

  selectedMenuItemId = 1
  menuItems: MenuItem[] = [
    {id: 1, title: "Profile", image: "assets/feed.svg"},
    {id: 2, title: "Requests", image: "assets/requests.svg"}
  ]

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

  openProfileModal() {
    const modalRef = this.modalService.open(ProfileEditModalComponent);
    modalRef.componentInstance.content = 'Content';

    modalRef.result.then(
      v =>  console.log(v),
      v => console.log(v)
    )
  }
}
