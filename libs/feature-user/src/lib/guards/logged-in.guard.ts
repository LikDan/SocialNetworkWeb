import {Injectable} from "@angular/core"
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router"
import {map, Observable} from "rxjs"
import {UserService} from "../shared/user.service"

@Injectable({
  providedIn: "root"
})
export class LoggedInGuard implements CanActivate {

  constructor(private service: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.service.getProfile().pipe(map(p => p === null))
  }
}
