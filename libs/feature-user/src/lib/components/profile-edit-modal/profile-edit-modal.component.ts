import {ChangeDetectionStrategy, Component} from "@angular/core"
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap"
import {UserService} from "../../shared/user.service"
import {Observable, tap} from "rxjs"
import {Profile} from "../../models/profile"
import {FormControl, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: "web-profile-edit-modal",
  templateUrl: "./profile-edit-modal.component.html",
  styleUrls: ["./profile-edit-modal.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditModalComponent {
  maxDate = new Date()

  user$: Observable<Profile | null>

  form = new FormGroup({
    nickname: new FormControl("", [Validators.required]),
    birthday: new FormControl("", [Validators.required]),
    is_private: new FormControl(false)
  })

  constructor(private activeModal: NgbActiveModal, private service: UserService) {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 12)

    this.user$ = this.service.getProfile().pipe(tap(profile => {
      this.form.get("nickname")?.setValue(profile?.nickname ?? "")
      this.form.get("birthday")?.setValue(profile?.birthday ?? "")
      this.form.get("is_private")?.setValue(profile?.is_private ?? false)
    }))
  }

  close(): void {
    const profile = this.form.value as Profile
    this.service.updateProfile(profile)

    this.activeModal.close()
  }

  dismiss(): void {
    this.activeModal.dismiss(0)
  }

  changePhoto(input: HTMLInputElement): void {
    if (!input.files) return
    this.service.updatePhoto(input.files[0])
  }
}
