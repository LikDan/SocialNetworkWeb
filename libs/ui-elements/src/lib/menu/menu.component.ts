import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core"
import { MenuItem } from "./item/menu-item.component";

@Component({
  selector: "web-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() items: MenuItem[];
  @Input() selectedId = 0;

  @Output() selectItem = new EventEmitter<MenuItem>()
}
