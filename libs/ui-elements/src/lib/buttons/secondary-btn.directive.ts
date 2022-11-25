import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webSecondaryBtn]"
})
export class SecondaryBtnDirective {

  constructor(elRef: ElementRef<HTMLButtonElement>) {
    elRef.nativeElement.classList.add("btn", "btn-secondary");
  }

}
