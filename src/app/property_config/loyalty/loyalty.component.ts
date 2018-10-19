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
  private dummy_var:srting;
  private dummy_var2:srting;
  private form: FormGroup;

  private data:any = [
    {
      property:'H1551',
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
    }/*,{}*/
  ];

  constructor(fb:FormBuilder) {
   this.form=fb.group({
     room_selection_fee:['']
   })
  }

  ngOnInit() {
  }

  private set_loyalty_members(new_val:boolean){
    this.loyalty_members = new_val;
  }

  onPropertyChange(selected_index: number):void{
    this.property_index = selected_index;
  }

  printValue(value:string){
    console.log(value);
  }

}
