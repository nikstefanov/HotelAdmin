import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { HamburgerMenuComponent } from './header/hamburger-menu/hamburger-menu.component';
import { SettingsComponent } from './property_config/settings/settings.component';
import { ToggleComponent } from './component/toggle/toggle.component';
import { BlackoutDatesTableComponent } from './component/blackout-dates-table/blackout-dates-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserMenuComponent,
    HamburgerMenuComponent,
    SettingsComponent,
    ToggleComponent,
    BlackoutDatesTableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
