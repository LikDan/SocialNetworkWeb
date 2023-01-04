import {Injectable} from "@angular/core"
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router"
import {map, Observable, tap} from "rxjs"
import {UserService} from "../shared/user.service"

@Injectable({
  providedIn: "root"
})
export class LoggedInGuard implements CanActivate {

  constructor(private service: UserService, private router: Router) {
  }

  redirect(): void {
    this.router.navigate([""]).then()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.service.getProfile().pipe(
      map(p => p === null),
      tap(p => p ? null : this.redirect())
    )
  }
}
