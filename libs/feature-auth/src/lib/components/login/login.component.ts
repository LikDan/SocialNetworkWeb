import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output} from "@angular/core"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {LoginData} from "../../models/data"
import {AuthService} from "../../shared/auth.service"
import {AuthToken} from "../../models/token"
import {catchError, of, Subscription} from "rxjs"

@Component({
  selector: "web-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  primaryBtnDisabled = false

  @Output() loginSuccess = new EventEmitter<AuthToken>()
  private login$: Subscription

  constructor(private service: AuthService, private cdr: ChangeDetectorRef) {
  }

  get(control: string): FormControl {
    return this.form.get(control) as FormControl
  }

  isError(controlName: string, error: string): boolean {
    const control = this.get(controlName)
    return control.touched && control.errors?.[error]
  }

  submit(): void {
    const data = this.form.value as LoginData

    this.primaryBtnDisabled = true
    this.login$ = this.service.login(data).pipe(catchError(v => {
      this.primaryBtnDisabled = false
      this.cdr.detectChanges()
      return of(v)
    })).subscribe(this.loginSuccess.emit)
  }

  ngOnDestroy(): void {
    this.login$.unsubscribe()
  }
}
