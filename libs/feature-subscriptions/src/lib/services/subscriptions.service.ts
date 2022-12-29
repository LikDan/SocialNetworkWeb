import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {BehaviorSubject, Observable, tap} from "rxjs"
import {Subscription, SubscriptionStatus} from "../models/subscription"
import {PaginationService} from "../../../../util-pagination/src/lib/pagination.service"

@Injectable({
  providedIn: "root"
})
export class SubscriptionsService {

  lastId: string
  lastSubscribersId: string

  subscribers$ = new BehaviorSubject<Subscription[]>([])

  constructor(private http: HttpClient, private pagination: PaginationService) {
  }

  getRequests(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>("api/subscribers?status=PENDING").pipe(tap(s => this.lastId = s[s.length - 1].id))
  }

  nextRequests(): Observable<Subscription[]> {
    return this.pagination.next("api/subscribers?status=PENDING", this.lastId)
  }

  getSubscribers(): Observable<Subscription[]> {
    this.http.get<Subscription[]>("api/subscribers?status=APPROVED")
      .pipe(tap(s => this.lastSubscribersId = s[s.length - 1].id))
      .subscribe({next: v => this.subscribers$.next(v)})

    return this.subscribers$
  }

  nextSubscribers(): Observable<Subscription[]> {
    return this.pagination.next("api/subscribers?status=APPROVED", this.lastSubscribersId)
  }

  accept(s: Subscription): Observable<SubscriptionStatus> {
    return this.http.post<SubscriptionStatus>(`api/subscriptions/${s.from_profile_id}`, {status: "APPROVED"})
      .pipe(tap(_ => this.subscribers$.next([...this.subscribers$.value, s])))
  }

  decline(s: Subscription): Observable<SubscriptionStatus> {
    return this.http.post<SubscriptionStatus>(`api/subscriptions/${s.from_profile_id}`, {status: "DECLINED"})
  }
}
