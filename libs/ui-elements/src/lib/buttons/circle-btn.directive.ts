import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webCircleBtn]"
})
export class CircleBtnDirective {

  constructor(elRef: ElementRef<HTMLButtonElement>) {
    elRef.nativeElement.classList.add("btn-square", "btn-circle");
  }

}
