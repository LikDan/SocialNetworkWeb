import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MenuItem } from "@web/ui-elements";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "web-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {

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
  ];

  lastRes: string | null = null;

  from = new FormGroup({
    i: new FormControl("", Validators.required)
  })

  constructor(private http: HttpClient, private modalService: NgbModal) {
  }

  tryProxy(): void {
    this.http.get("/api/static").subscribe({
      next: console.log
    });
  }


  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.content = 'Content';

    modalRef.result.then(
      v => {
        this.lastRes = "close " + v
      },
      v => {
        this.lastRes = "dismiss " + v
      }
    )
  }

  log($event: any) {
    console.log($event)
  }
}
