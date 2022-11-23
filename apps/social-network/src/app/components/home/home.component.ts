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

  tryProxy() {
    this.http.get("/api/static").subscribe({
      next: console.log
    })
  }
}
