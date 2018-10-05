import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ActivationEnd, Event, NavigationEnd, RoutesRecognized, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
  userRole: string;
  breadcrumb0: string;
  breadcrumb0_icon: string;
  breadcrumb1: string;
  showUserMenu: boolean;
  showHamburgerMenu: boolean;
  subscription: any;

  constructor(private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router) {
      this.userName = 'Nikolay Stefanov';
      this.userRole = 'Administrator';
      this.breadcrumb0 = null;
      this.breadcrumb0_icon = null;
      this.breadcrumb1 = null;
      this.showUserMenu = false;
      this.showHamburgerMenu = false;
      //this.closeMenuFn = this.closeMenu;
  }

  ngOnInit() {/*
    console.log(this.location.path());
    var url_parts = this.location.path().substr(1).split('/');
    if(url_parts[0]){this.setBreadcrumb0(url_parts[0]);}
    if(this.breadcrumb0 && url_parts[1]){this.setBreadcrumb1(url_parts[1]);}
    if(this.breadcrumb0){this.setBreadcrumb0Icon();}*/

    /*https://stackoverflow.com/a/45737376/10069950*/
    let _this = this;
    this.subscription = this.router.events.subscribe((event) =>
      {_this.getRouteData(_this, event);}
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getRouteData(_this: HeaderComponent, event:Event){
    if (event instanceof RoutesRecognized) {
      //console.log("Data: " +  JSON.stringify(event.state.root.firstChild.data) );
      //console.log(event);
      //console.log("bread0: " + event.state.root.children[0].data.breadcrumb);
      //console.log("bread1: " + event.state.root.children[0].children[0].data.breadcrumb);
      if(event.state.root.children[0] && event.state.root.children[0].data){
        _this.breadcrumb0 = event.state.root.children[0].data.breadcrumb;
      } else { _this.breadcrumb0 = null;}
      if(event.state.root.children[0] && event.state.root.children[0].data){
        _this.breadcrumb0_icon = event.state.root.children[0].data.icon;
      } else { _this.breadcrumb0_icon = null;}
      if(event.state.root.children[0] && event.state.root.children[0].children[0] &&
        event.state.root.children[0].children[0].data){
        _this.breadcrumb1 = event.state.root.children[0].children[0].data.breadcrumb;
      } else { _this.breadcrumb1 = null;}
    }
  }

  toggleUserMenu(event:MouseEvent){
    this.showUserMenu = !this.showUserMenu;
    this.showHamburgerMenu = false;
    event.stopPropagation();//Source: https://stackoverflow.com/a/35274102/10069950
    //console.log(event);
  }

  toggleHamburgerMenu(event:MouseEvent){
    this.showHamburgerMenu = !this.showHamburgerMenu;
    this.showUserMenu = false;
    event.stopPropagation();//Source: https://stackoverflow.com/a/35274102/10069950
  }

  closeMenus(event:MouseEvent){
    this.showUserMenu = false;
    this.showHamburgerMenu = false;
  }

  get closeMenuFn(){
    return this.closeMenus.bind(this);
  }

  clickHamburgerMenu(event/*:MouseEvent*/){
    //console.log(event.path[2].childNodes[1].textContent.trim());
    /*this.breadcrumb0 = event.path[2].childNodes[1].textContent.trim();
    this.breadcrumb1 = event.toElement.innerHTML;
    this.setBreadcrumb0Icon();*/
    //this.showUserMenu = false;
    this.showHamburgerMenu = false;
  }

  get clickHamburgerMenuFn(){
    return this.clickHamburgerMenu.bind(this);
  }
/*
  setBreadcrumb0(url_part:string){
    switch(url_part) {
      case "property_config": {
        this.breadcrumb0 = "Property Config";break;
      }
      default: {
        this.breadcrumb0 = null;break;
      }
    }
  }

  setBreadcrumb1(url_part:string){
    switch(this.breadcrumb0) {
      case "Property Config": {
        switch(url_part){
          case "settings": {this.breadcrumb1="Settings";break;}
          case "loyalty": {this.breadcrumb1="Loyalty";break;}
          case "upgrade": {this.breadcrumb1="Upgrade";break;}
          default: {this.breadcrumb1=null;break;}
        }
        break;
      }
      default: {
        this.breadcrumb1=null;
        break;
      }
    }
  }

  setBreadcrumb0Icon(){
    switch(this.breadcrumb0) {
       case "Dashboard": {
          this.breadcrumb0_icon = 'fas fa-tachometer-alt';
          break;
       }
       case "Reports": {
          this.breadcrumb0_icon = 'far fa-newspaper';
          break;
       }
       case "Property Config": {
          this.breadcrumb0_icon = 'fas fa-hotel';
          break;
       }
       case "Admin": {
          this.breadcrumb0_icon = 'fas fa-cog';
          break;
       }
       case "Demo Email": {
          this.breadcrumb0_icon = 'far fa-envelope';
          break;
       }
       default: {
          this.breadcrumb0_icon = 'fas fa-hotel';
          break;
       }
    }
  }*/
}
