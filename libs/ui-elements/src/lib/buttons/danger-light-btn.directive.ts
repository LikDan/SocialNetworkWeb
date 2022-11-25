import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[webDangerLightBtn]"
})
export class DangerLightBtnDirective {

  constructor(elRef: ElementRef<HTMLButtonElement>) {
    elRef.nativeElement.classList.add("btn", "btn-danger-light");
  }
}
