import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[webMenuItem]"
})
export class MenuItemDirective {

  private set _isActive(value: boolean) {
    const el = this.elRef.nativeElement;
    if (value) el.classList.add("btn-primary-light", "selected");
    else el.classList.remove("btn-primary-light", "selected");
  }

  @Input() set webMenuItem(value: string | boolean) {
    this._isActive = typeof value === typeof true && value === true;
  }

  constructor(private elRef: ElementRef<HTMLInputElement>) {
    elRef.nativeElement.classList.add("btn", "menu-item");
  }

}
