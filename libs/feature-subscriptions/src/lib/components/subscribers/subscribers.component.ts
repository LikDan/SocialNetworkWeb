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

  loadSubscription$: RXSubscription

  constructor(private service: SubscriptionsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadSubscription$ = this.service.subscriptionsLoad().subscribe()
    this.subscribers$ = this.service.subscriptions()
  }

  hasNext = (): Observable<boolean> => this.service.subscriptionsHasNext()
  next = (): void => this.service.subscriptionsNext()
}
