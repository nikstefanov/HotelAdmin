import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {

  private loyalty_members:boolean = true;
  private invitation_email:boolean = true;
  private reminder_email:boolean = true;
  private room_selection:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  private set_loyalty_members(new_val:boolean){
    this.loyalty_members = new_val;
  }

}
