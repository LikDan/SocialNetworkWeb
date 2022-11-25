import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[webInput]"
})
export class InputDirective {

  private set _isError(value: boolean) {
    const el = this.elRef.nativeElement;
    if (value) el.classList.add("error");
    else el.classList.remove("error");
  }

  @Input() set webInput(value: string | boolean) {
    this._isError = typeof value === typeof true && value === true;
  }

  constructor(private elRef: ElementRef<HTMLInputElement>) {
    elRef.nativeElement.classList.add("form-control");
  }

}
