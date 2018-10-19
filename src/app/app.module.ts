import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { HamburgerMenuComponent } from './header/hamburger-menu/hamburger-menu.component';
import { SettingsComponent } from './property_config/settings/settings.component';
import { ToggleComponent } from './component/toggle/toggle.component';
import { BlackoutDatesTableComponent } from './component/blackout-dates-table/blackout-dates-table.component';
import { LoyaltyComponent } from './property_config/loyalty/loyalty.component';
import { MultiSelectTableComponent } from './component/multi-select-table/multi-select-table.component';
import { DiscountInputFieldComponent } from './component/discount-input-field/discount-input-field.component';
import { RestrictedTextInputComponent } from './component/restricted-text-input/restricted-text-input.component';
import { UpgradeComponent } from './property_config/upgrade/upgrade.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestedRoomsComponent } from './reports/requested-rooms/requested-rooms.component';
import { GuestJourneyComponent } from './reports/guest-journey/guest-journey.component';
import { SortingButtonsComponent } from './component/sorting-buttons/sorting-buttons.component';
import { RegexMaskDirective } from './directive/regex-mask.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserMenuComponent,
    HamburgerMenuComponent,
    SettingsComponent,
    ToggleComponent,
    BlackoutDatesTableComponent,
    LoyaltyComponent,
    MultiSelectTableComponent,
    DiscountInputFieldComponent,
    RestrictedTextInputComponent,
    UpgradeComponent,
    RequestedRoomsComponent,
    GuestJourneyComponent,
    SortingButtonsComponent,
    RegexMaskDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  exports:[
    RegexMaskDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
