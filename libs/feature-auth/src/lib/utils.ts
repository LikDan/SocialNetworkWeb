import {AbstractControl, ValidationErrors} from "@angular/forms"

export const sameAs = (controlName: string) => (group: AbstractControl): ValidationErrors | null => {
  const value = group.parent?.get(controlName)?.value
  return group.value === value ? null : {notSame: true}
}
