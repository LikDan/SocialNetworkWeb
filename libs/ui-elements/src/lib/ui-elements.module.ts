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
import { MenuItemComponent } from "./menu/item/menu-item.component";
import { SecondaryTextBtnDirective } from "./buttons/secondary-text-btn.directive";
import { FrameComponent } from "./fragments/frame/frame.component";
import { PopupComponent } from "./fragments/popup/popup.component";
import { ModalFrameComponent } from "./fragments/modal-frame/modal-frame.component";
import { SelectDirective } from './selects/select.directive';
import { ErrorTextDirective } from './text/error-text.directive';

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
    ModalFrameComponent,

    SelectDirective,
     ErrorTextDirective
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
    ModalFrameComponent,

    SelectDirective,
     ErrorTextDirective
  ]
})
export class UiElementsModule {
}
