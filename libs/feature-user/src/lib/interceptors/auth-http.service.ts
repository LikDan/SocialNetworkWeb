import {Injectable} from "@angular/core"
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"
import {Observable} from "rxjs"
import {UserService} from "../../../../../libs/feature-user/src/lib/shared/user.service"

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  get token() {
    return localStorage.getItem(UserService.tokenKey) ?? sessionStorage.getItem(UserService.tokenKey)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({headers: request.headers.set("Authorization", `Bearer ${this.token}`)})
    return next.handle(request)
  }
}
