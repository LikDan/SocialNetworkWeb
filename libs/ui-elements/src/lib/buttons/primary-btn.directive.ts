import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webPrimaryBtn]"
})
export class PrimaryBtnDirective {

  constructor(elRef: ElementRef<HTMLButtonElement>) {
    elRef.nativeElement.classList.add("btn", "btn-primary");
  }

}
