import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MenuItem } from "@web/ui-elements";

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

  lastRes: number | null = null;

  constructor(private http: HttpClient) {
  }

  tryProxy(): void {
    this.http.get("/api/static").subscribe({
      next: console.log
    });
  }

  handle(numberPromise: Promise<number>) {
    numberPromise.then(v => this.lastRes = v, v2 => this.lastRes = v2);
  }
}
