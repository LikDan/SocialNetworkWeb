import {Component, OnDestroy, OnInit} from "@angular/core"
import {MenuItem} from "@web/ui-elements"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"
import {ModalComponent} from "../modal/modal.component"
import {Router} from "@angular/router"
import {Subscription} from "rxjs"
import {UserService} from "../../../../../../libs/feature-user/src/lib/shared/user.service"

@Component({
  selector: "web-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnDestroy, OnInit {

  public menuItems: MenuItem[] = [
    {
      id: 1,
      title: "Title",
      image: "/assets/menu/feed.svg"
    },
    {
      id: 2,
      title: "Title2",
      image: "/assets/menu/feed.svg"
    },
    {
      id: 3,
      title: "Title2",
      image: "/assets/menu/feed.svg"
    }
  ]

  lastRes: string | null = null

  from = new FormGroup({
    i: new FormControl("", Validators.required)
  })

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

  open() {
    const modalRef = this.modalService.open(ModalComponent)
    modalRef.componentInstance.content = "Content"

    modalRef.result.then(
      v => {
        this.lastRes = "close " + v
      },
      v => {
        this.lastRes = "dismiss " + v
      }
    )
  }

  logout(): void {
    this.userService.logout()
  }

  ngOnDestroy(): void {
    this.profile$.unsubscribe()
  }
}
