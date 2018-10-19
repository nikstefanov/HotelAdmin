import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SettingsComponent} from './property_config/settings/settings.component';
import {LoyaltyComponent} from './property_config/loyalty/loyalty.component';
import {UpgradeComponent} from './property_config/upgrade/upgrade.component';
import {RequestedRoomsComponent} from './reports/requested-rooms/requested-rooms.component';
import {GuestJourneyComponent} from './reports/guest-journey/guest-journey.component';
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
    path: 'property_config', /*component: HotelViewComponent,*/
      data:{breadcrumb:'Property Config', icon:'fas fa-hotel'},
      children: [
        {path: 'settings', component: SettingsComponent, data: {breadcrumb:'Settings'} },
        {path: 'loyalty', component: LoyaltyComponent, data: {breadcrumb:'Loyalty'} },
        {path: 'upgrade', component: UpgradeComponent, data: {breadcrumb:'Upgrade'} },/*
        {path: 'satellite', component: SatelliteViewComponent},
        {path: 'map', component: MapViewComponent}*/
    ],
  },
  {path: 'reports', /*component: SettingsComponent*/
   data: {breadcrumb:'Reports', icon:'far fa-newspaper'},
   children: [
     {path: 'requested_rooms', component: RequestedRoomsComponent, data: {breadcrumb:'Requested Rooms'} },
     {path: 'guest_journey', component: GuestJourneyComponent, data: {breadcrumb:'Guest Journey'} },
   ],
  },/*
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
