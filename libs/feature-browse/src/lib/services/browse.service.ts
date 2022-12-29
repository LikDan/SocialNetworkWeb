import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable, tap} from "rxjs"
import {ShortProfile} from "../models/profile"
import {PaginationService} from "../../../../util-pagination/src/lib/pagination.service"
import {Subscription} from "../models/subscription"

@Injectable({
  providedIn: "root"
})
export class BrowseService {

  lastId: string

  constructor(private http: HttpClient, private pagination: PaginationService) {
  }

  getProfiles(): Observable<ShortProfile[]> {
    return this.http.get<ShortProfile[]>("api/profiles").pipe(tap(v => this.lastId = v[v.length - 1].id))
  }

  next(): Observable<ShortProfile[]> {
    return this.pagination.next("api/profiles", this.lastId)
  }

  add(id: string): Observable<Subscription> {
    return this.http.post<Subscription>(`api/profiles/${id}/subscribe`, {})
  }
}
