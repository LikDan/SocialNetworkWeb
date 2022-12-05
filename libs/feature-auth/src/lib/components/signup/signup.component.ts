import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output} from "@angular/core"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {AuthService} from "../../shared/auth.service"
import {SignUpData} from "../../models/data"
import {sameAs} from "../../utils"
import {AuthToken} from "../../models/token"
import {catchError, of, Subscription} from "rxjs"

@Component({
  selector: "web-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnDestroy {
  form = new FormGroup({
    user: new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      password_confirmation: new FormControl("", [sameAs("password")])
    }),
    profile: new FormGroup({
      nickname: new FormControl("", [Validators.required]),
      birthday: new FormControl("", [Validators.required]),
      is_private: new FormControl(false)
    })
  })

  primaryBtnDisabled = false

  @Output() signupSuccess = new EventEmitter<AuthToken>()

  maxDate = new Date()

  private signup$: Subscription

  constructor(private service: AuthService, private cdr: ChangeDetectorRef) {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 12)
  }

  get(control: string): FormControl {
    return this.form.get(control) as FormControl
  }

  isError(controlName: string, error: string): boolean {
    const control = this.get(controlName)
    return control.touched && control.errors?.[error]
  }

  submit(): void {
    const data = this.form.value as SignUpData
    this.service.signup(data).pipe(catchError(v => {
      this.primaryBtnDisabled = false
      this.cdr.detectChanges()
      return of(v)
    })).subscribe(this.signupSuccess.emit)
  }

  ngOnDestroy(): void {
    this.signup$.unsubscribe()
  }
}
