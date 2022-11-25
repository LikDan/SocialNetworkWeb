import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webSquareBtn]"
})
export class SquareBtnDirective {

  constructor(elRef: ElementRef<HTMLButtonElement>) {
    elRef.nativeElement.classList.add("btn-square");
  }

}
