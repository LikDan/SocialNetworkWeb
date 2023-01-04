import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {ShortProfile} from "../models/profile"
import {Subscription} from "../models/subscription"
import {Pagination} from "../../../../util-pagination/src/lib/pagination"

@Injectable({
  providedIn: "root"
})
export class BrowseService {
  private pagination: Pagination<ShortProfile>

  constructor(private http: HttpClient) {
    this.pagination = new Pagination(http, "api/profiles")
  }

  profiles = (): Observable<ShortProfile[]> => this.pagination.elements
  load = (): Observable<ShortProfile[]> => this.pagination.load()
  next = (): void => this.pagination.next()
  hasNext = (): Observable<boolean> => this.pagination.hasNext

  add(id: string): Observable<Subscription> {
    return this.http.post<Subscription>(`api/profiles/${id}/subscribe`, {})
  }

}
