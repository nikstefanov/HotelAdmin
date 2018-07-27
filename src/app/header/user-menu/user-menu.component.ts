import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @Input() parentCloseMenu: Function;
  constructor() {
    this.parentCloseMenu =
      ()=>{console.log("Trying to call header's function to close user menu.");};
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

}
