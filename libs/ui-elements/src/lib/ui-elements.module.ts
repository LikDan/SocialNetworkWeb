import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimaryBtnDirective } from "./buttons/primary-btn.directive";
import { SecondaryBtnDirective } from "./buttons/secondary-btn.directive";
import { SquareBtnDirective } from "./buttons/square-btn.directive";
import { CircleBtnDirective } from "./buttons/circle-btn.directive";
import { DangerLightBtnDirective } from "./buttons/danger-light-btn.directive";
import { PrimaryLightBtnDirective } from "./buttons/primary-light-btn.directive";
import { CheckboxDirective } from "./checkboxes/checkbox.directive";
import { InputDirective } from "./inputs/input.directive";
import { MenuComponent } from "./menu/menu.component";
import { MenuItemDirective } from "./menu/menu-item.directive";
import { MenuItemComponent } from "./menu/menu-item.component";
import { SecondaryTextBtnDirective } from "./buttons/secondary-text-btn.directive";
import { FrameComponent } from "./frames/frame.component";
import { PopupComponent } from "./frames/popup.component";
import { DialogComponent } from "./frames/dialog.component";
import { SelectDirective } from './selects/select.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PrimaryBtnDirective,
    SecondaryBtnDirective,
    SquareBtnDirective,
    CircleBtnDirective,
    DangerLightBtnDirective,
    PrimaryLightBtnDirective,

    CheckboxDirective,
    InputDirective,

    MenuComponent,
    MenuItemDirective,
    MenuItemComponent,
    SecondaryTextBtnDirective,
    FrameComponent,
    PopupComponent,
    DialogComponent,
    SelectDirective
  ],
  exports: [
    PrimaryBtnDirective,
    SecondaryBtnDirective,
    SquareBtnDirective,
    CircleBtnDirective,
    DangerLightBtnDirective,
    PrimaryLightBtnDirective,
    CheckboxDirective,
    InputDirective,
    MenuComponent,
    MenuItemDirective,
    MenuItemComponent,
    SecondaryTextBtnDirective,
    FrameComponent,
    PopupComponent,
    DialogComponent,
    SelectDirective
  ]
})
export class UiElementsModule {
}
