import { Component, Input } from "@angular/core";
import { MenuItem } from "./menu-item.component";

@Component({
  selector: "web-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  @Input() items: MenuItem[];
  @Input() selectedId = 0;
}
