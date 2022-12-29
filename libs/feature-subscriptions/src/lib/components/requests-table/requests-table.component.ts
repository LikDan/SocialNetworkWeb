import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core"
import {Observable, Subscription as RXSubscription} from "rxjs"
import {SubscriptionsService} from "../../services/subscriptions.service"
import {Subscription} from "../../models/subscription"

@Component({
  selector: "web-requests-table",
  templateUrl: "./requests-table.component.html",
  styleUrls: ["./requests-table.component.scss"],
})
export class RequestsTableComponent implements OnInit, OnDestroy{
  subscriptions$: Observable<Subscription[]>

  acceptSubscription$: RXSubscription
  declineSubscription$: RXSubscription

  constructor(private service: SubscriptionsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscriptions$ = this.service.getRequests()
  }

  next(): void {
    this.subscriptions$ = this.service.nextRequests()
  }

  accept(subscription: Subscription): void {
    this.acceptSubscription$?.unsubscribe()
    this.service.accept(subscription).subscribe({
      next: s => {
        subscription.status = s
        this.cdr.detectChanges()
      }
    })
  }

  decline(subscription: Subscription): void {
    this.declineSubscription$?.unsubscribe()
    this.service.decline(subscription).subscribe({
      next: s => {
        subscription.status = s
        this.cdr.detectChanges()
      }
    })
  }

  ngOnDestroy(): void {
    this.acceptSubscription$?.unsubscribe()
    this.declineSubscription$?.unsubscribe()
  }
}
