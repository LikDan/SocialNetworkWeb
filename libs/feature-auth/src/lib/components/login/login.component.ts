import {Component, EventEmitter, Output} from "@angular/core"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {LoginData} from "../../models/data"
import {AuthService} from "../../shared/auth.service"
import {AuthToken} from "../../models/token"

@Component({
  selector: "web-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  @Output() loginSuccess = new EventEmitter<AuthToken>()

  constructor(private service: AuthService) {
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
    this.service.login(data).subscribe(this.loginSuccess.emit)
  }
}
