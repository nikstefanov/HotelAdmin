import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';
import { RegexMaskDirective } from '../../directive/regex-mask.directive';

@Component({
  selector: 'app-loyalty',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.css']
})
export class LoyaltyComponent implements OnInit {

  property_index:number = 0;
  private loyalty_members:boolean = true;
  private invitation_email:boolean = true;
  private reminder_email:boolean = true;
  private room_selection:boolean = true;
  private confirmation_email:boolean = true;
  private upgrade_confirmation_email:boolean = true;
  //private dummy_var:string;
  //private dummy_var2:string;
  private form: FormGroup;
  private tab_data: any = {};

  private data:any = [
    {
      property:'H1551',
      loyalty_members_data:{
        tier_level:{
          all: ['One','Two','Three','Four','Five'],
          selected:[true,false,true,false,false]
        },
        room_selection_fee:5,
        upgrade_discount_type_amount:true,
        upgrade_discount_amount: 6,
        allow_room_selection:true,
        send_invitation_email: true,
        send_invitation_email_upon_res: true,
        send_invitation_email_days_left: 5,
        send_reminder_email: true,
        send_reminder_email_days_left:9,
        send_confirmation_email:true,
        send_upgrade_confirmation_email: true,
      },
      non_loyalty_members_data:{
        room_selection_fee:4,
        upgrade_discount_type_amount:true,
        upgrade_discount_amount: 5,
        allow_room_selection:true,
        send_invitation_email: true,
        send_invitation_email_upon_res: true,
        send_invitation_email_days_left: 5,
        send_reminder_email: true,
        send_reminder_email_days_left:9,
        send_confirmation_email:false,
        send_upgrade_confirmation_email: false,
      }
    },{
      property:'ALTH',
      loyalty_members_data:{
        tier_level:{
          all: ['One','Two','Three','Four'],
          selected:[false,false,true,false]
        },
        room_selection_fee:5,
        upgrade_discount_type_amount:true,
        upgrade_discount_amount: 6,
        allow_room_selection:true,
        send_invitation_email: true,
        send_invitation_email_upon_res: true,
        send_invitation_email_days_left: 5,
        send_reminder_email: true,
        send_reminder_email_days_left:9,
        send_confirmation_email:true,
        send_upgrade_confirmation_email: true,
      },
      non_loyalty_members_data:{
        room_selection_fee:4,
        upgrade_discount_type_amount:true,
        upgrade_discount_amount: 5,
        allow_room_selection:true,
        send_invitation_email: true,
        send_invitation_email_upon_res: true,
        send_invitation_email_days_left: 5,
        send_reminder_email: true,
        send_reminder_email_days_left:9,
        send_confirmation_email:false,
        send_upgrade_confirmation_email: false,
      }
    }
  ];

  constructor() {
    this.tab_data.changed = false;
    this.set_loyalty_members(this.loyalty_members);
  }

  ngOnInit() {
  }

  private set_loyalty_members(new_val:boolean){
    if(!this.tab_data.changed){
      this.loyalty_members = new_val;
      this.tab_data = new_val ? this.data[this.property_index].loyalty_members_data : this.data[this.property_index].non_loyalty_members_data;
      this.tab_data.changed = false;
    }
  }

  onPropertyChange(selected_index: number):void{
    this.property_index = selected_index;
    this.set_loyalty_members(this.loyalty_members);
  }

  change_allow_room_selection(value:boolean){
    if(!value){
      this.tab_data.send_invitation_email = false;
      this.tab_data.send_reminder_email = false;
      this.tab_data.send_confirmation_email = false;
      this.tab_data.send_upgrade_confirmation_email = false;
    }
  }

  change_send_invitation_email(value:boolean){
    if(!value){
      this.tab_data.send_reminder_email = false;
    }
  }

  printValue(value:string){
    console.log(value);
  }

  mark_changed(){
    this.tab_data.changed = true;
  }

  on_save_button_click(){
    this.tab_data.changed = false;
  }

}
