import {ChangeDetectorRef, Component, OnInit} from "@angular/core"
import {Observable} from "rxjs"
import {Subscription} from "../../models/subscription"
import {Subscription as RXSubscription} from "rxjs/internal/Subscription"
import {SubscriptionsService} from "../../services/subscriptions.service"

@Component({
  selector: "web-subscribers",
  templateUrl: "./subscribers.component.html",
  styleUrls: ["./subscribers.component.scss"],
})
export class SubscribersComponent implements OnInit{
  subscribers$: Observable<Subscription[]>

  constructor(private service: SubscriptionsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscribers$ = this.service.getSubscribers()
  }
}
