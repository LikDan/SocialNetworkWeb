import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private http: HttpClient) { }

  next<T>(url: string, id: string): Observable<T> {
    return this.http.get<T>(`${url}?from=${id}`)
  }
}
