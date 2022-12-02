import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {LoginData, SignUpData} from "../models/data"
import {map, Observable} from "rxjs"
import {AuthToken} from "../models/token"

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data: LoginData): Observable<AuthToken> {
    return this.http.post<{token: AuthToken}>("api/users/login", data).pipe(map(r => r.token))
  }

  signup(data: SignUpData): Observable<AuthToken> {
    return this.http.post<{token: AuthToken}>("api/users/signup", data).pipe(map(r => r.token))
  }
}
