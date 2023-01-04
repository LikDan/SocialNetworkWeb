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
  requests$: Observable<Subscription[]>

  loadSubscription$: RXSubscription
  acceptSubscription$: RXSubscription
  declineSubscription$: RXSubscription

  constructor(private service: SubscriptionsService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadSubscription$ = this.service.requestsLoad().subscribe()
    this.requests$ = this.service.requests()
  }

  hasNext = (): Observable<boolean> => this.service.requestsHasNext()
  next = (): void => this.service.requestsNext()


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
