import {Directive, ElementRef} from "@angular/core"

@Directive({
  selector: "[webErrorText]"
})
export class ErrorTextDirective {

  constructor(elRef: ElementRef<HTMLElement>) {
    elRef.nativeElement.classList.add("error-text")
  }

}
