import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webPrimaryLightBtn]"
})
export class PrimaryLightBtnDirective {

  constructor(elRef: ElementRef<HTMLButtonElement>) {
    elRef.nativeElement.classList.add("btn", "btn-primary-light");
  }

}
