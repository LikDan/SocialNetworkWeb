import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[webSelect]'
})
export class SelectDirective {

  constructor(elRef: ElementRef<HTMLSelectElement>) {
    elRef.nativeElement.classList.add("form-select")
  }

}
