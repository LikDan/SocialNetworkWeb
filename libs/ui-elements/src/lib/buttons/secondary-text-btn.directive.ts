import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webSecondaryTextBtn]"
})
export class SecondaryTextBtnDirective {

  constructor(elRef: ElementRef<HTMLButtonElement>) {
    elRef.nativeElement.classList.add("btn", "btn-link");
  }
}
