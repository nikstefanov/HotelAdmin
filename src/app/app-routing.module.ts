import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettingsComponent} from './property_config/settings/settings.component';
import {LoyaltyComponent} from './property_config/loyalty/loyalty.component';
import {UpgradeComponent} from './property_config/upgrade/upgrade.component';
/*
import {HotelViewComponent} from "./hotel-view/hotel-view.component";
import {SatelliteViewComponent} from "./satellite-view/satellite-view.component";
import {MapViewComponent} from "./map-view/map-view.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "./login/login.component";
import {ConfirmSelectionComponent} from "./confirm-selection/confirm-selection.component";
import {ConfirmedComponent} from "./confirmed/confirmed.component";
*/
const routes: Routes = [
  {
    path: 'property_config', /*component: HotelViewComponent,*/ children: [
      {path: 'settings', component: SettingsComponent},
      {path: 'loyalty', component: LoyaltyComponent},
      {path: 'upgrade', component: UpgradeComponent},/*
      {path: 'satellite', component: SatelliteViewComponent},
      {path: 'map', component: MapViewComponent}*/
    ]
  },
  {path: 'settings', component: SettingsComponent},/*
  {path: 'confirmed', component: ConfirmedComponent},
  {path: 'login/:token', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: '/login/abcde'},
  {path: '**', component: NotFoundComponent}
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
