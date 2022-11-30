import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webInput]"
})
export class InputDirective {

  constructor(elRef: ElementRef<HTMLInputElement>) {
    elRef.nativeElement.classList.add("form-control");
  }

}
