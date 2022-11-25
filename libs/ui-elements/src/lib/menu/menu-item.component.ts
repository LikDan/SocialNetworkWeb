import { Component, Input } from "@angular/core";

@Component({
  selector: "web-menu-item",
  template: `
      <button [webMenuItem]="selected">
          <img [src]="item.image" [alt]="item.title">
          {{item.title}}
      </button>`,
  styles: [`
    :host {
      height: 42px;
    }

    button {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      gap: 12px;

      color: #7E8892 !important;
    }

    button.selected {
      color: #1B1D23 !important;
    }

    button.selected img {
      filter: invert(30%) sepia(93%) saturate(1475%) hue-rotate(211deg) brightness(101%) contrast(103%);
    }

    button img {
      filter: invert(52%) sepia(12%) saturate(325%) hue-rotate(169deg) brightness(100%) contrast(92%);
    }
  `]
})
export class MenuItemComponent {
  @Input() item: MenuItem;
  @Input() selected = false;
}

export interface MenuItem {
  id: number;
  title: string;
  image: string;
}
