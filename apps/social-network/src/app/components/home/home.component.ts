import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private http: HttpClient) {
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  tryProxy() {
    this.http.get("/api/static").subscribe({
      next: console.log
    })
  }
}
