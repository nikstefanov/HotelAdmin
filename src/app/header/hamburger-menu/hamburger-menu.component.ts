import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent implements OnInit {

  @Input() parentCloseMenu: Function;
  @Input() parentClickHamburgerMenu: Function;
  /*
  showDashboardMenu: boolean = false;
  showReportsMenu: boolean = false;
  showPropertyConfigMenu: boolean = false;
  showAdminMenu: boolean = false;
  showDemoEmailMenu: boolean = false;*/
  showSubMenu: boolean[] = [false, false, false, false, false];

  constructor() {
    this.parentCloseMenu =
      ()=>{console.log("Trying to call header's function to close hamburger menu.");};
    this.parentClickHamburgerMenu =
      ()=>{console.log("Trying to call header's function for click on hamburger menu.");};
  }

  ngOnInit() {
  }

  /**
  * Source: https://stackoverflow.com/a/50585796/10069950
  *
  */
  closeMenus(event:MouseEvent){
    this.parentCloseMenu(event);
  }
  clickHamburgerMenu(event:MouseEvent){
    this.parentClickHamburgerMenu(event);
  }
  /*
  toggleDashboardMenu(event:MouseEvent){
    this.showDashboardMenu = !this.showDashboardMenu;
    this.showReportsMenu = false;
    this.showPropertyConfigMenu = false;
    this.showAdminMenu = false;
    this.showDemoEmailMenu = false;
    event.stopPropagation();
  }

  toggleReportsMenu(event:MouseEvent){
    this.showDashboardMenu = false;
    this.showReportsMenu = !this.showReportsMenu;
    this.showPropertyConfigMenu = false;
    this.showAdminMenu = false;
    this.showDemoEmailMenu = false;
    event.stopPropagation();
  }*/

  toggleSubMenu(event:MouseEvent,id){
    let new_val = !this.showSubMenu[id];
    this.showSubMenu = [false, false, false, false, false];
    this.showSubMenu[id] = new_val;
    event.stopPropagation();
  }

}
