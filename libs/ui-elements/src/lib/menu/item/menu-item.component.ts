import { Component, Input } from "@angular/core";

@Component({
  selector: "web-menu-item",
  templateUrl: "menu-item.component.html",
  styleUrls: ['menu-item.component.scss']
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
