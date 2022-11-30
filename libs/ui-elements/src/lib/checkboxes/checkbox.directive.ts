import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webCheckbox]"
})
export class CheckboxDirective {

  constructor(elRef: ElementRef<HTMLInputElement>) {
    elRef.nativeElement.type = "checkbox";
    elRef.nativeElement.classList.add("form-check-input");
  }

}
