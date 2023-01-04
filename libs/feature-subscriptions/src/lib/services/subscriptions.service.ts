import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable, tap} from "rxjs"
import {Subscription, SubscriptionStatus} from "../models/subscription"
import {Pagination} from "../../../../util-pagination/src/lib/pagination"

@Injectable({
  providedIn: "root"
})
export class SubscriptionsService {
  private requestsPagination: Pagination<Subscription>
  private subscriptionsPagination: Pagination<Subscription>

  constructor(private http: HttpClient) {
    this.requestsPagination = new Pagination<Subscription>(http, "api/subscribers?status=PENDING")
    this.subscriptionsPagination = new Pagination<Subscription>(http, "api/subscribers?status=APPROVED")
  }

  requests = (): Observable<Subscription[]> => this.requestsPagination.elements
  requestsLoad = (): Observable<Subscription[]> => this.requestsPagination.load()
  requestsNext = (): void => this.requestsPagination.next()
  requestsHasNext = (): Observable<boolean> => this.requestsPagination.hasNext

  subscriptions = (): Observable<Subscription[]> => this.subscriptionsPagination.elements
  subscriptionsLoad = (): Observable<Subscription[]> => this.subscriptionsPagination.load()
  subscriptionsNext = (): void => this.subscriptionsPagination.next()
  subscriptionsHasNext = (): Observable<boolean> => this.subscriptionsPagination.hasNext

  accept(s: Subscription): Observable<SubscriptionStatus> {
    return this.http.post<SubscriptionStatus>(`api/subscriptions/${s.from_profile_id}`, {status: "APPROVED"})
      .pipe(tap(_ => this.subscriptionsPagination.append(s)))
  }

  decline(s: Subscription): Observable<SubscriptionStatus> {
    return this.http.post<SubscriptionStatus>(`api/subscriptions/${s.from_profile_id}`, {status: "DECLINED"})
  }
}
