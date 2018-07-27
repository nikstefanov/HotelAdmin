import { Component, OnInit } from '@angular/core';

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
  showHamburgerMenu: boolean

  constructor() {
    this.userName = 'Nikolay Stefanov';
    this.userRole = 'Administrator';
    this.breadcrumb0 = null;
    this.breadcrumb0_icon = null;
    this.breadcrumb1 = null;
    this.showUserMenu = false;
    this.showHamburgerMenu = false;
    //this.closeMenuFn = this.closeMenu;
  }

  ngOnInit() {
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
    this.breadcrumb0 = event.path[2].childNodes[1].textContent.trim();
    this.breadcrumb1 = event.toElement.innerHTML;
    this.setBreadcrumb0Icon();
    //this.showUserMenu = false;
    this.showHamburgerMenu = false;
  }

  get clickHamburgerMenuFn(){
    return this.clickHamburgerMenu.bind(this);
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
  }
}
