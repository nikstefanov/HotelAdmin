import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-journey',
  templateUrl: './guest-journey.component.html',
  styleUrls: ['./guest-journey.component.css']
})
export class GuestJourneyComponent implements OnInit {

  property_index:number = 0;
  guest_journey_data:any = [
    {property: 'ALGTH',
     journeys:[

       {number:203498,reservation_date:'2018/09/06 07:18',welcome_email_sent_date:'2018/09/06 07:19',
        welcome_email_read_date:'2018/09/06 17:18',click_trough_date:'2018/09/06 17:28',
        selection_date:'2018/09/06 18:18',selected_room:502,confirmation_email_sent_date:'2018/09/06 18:19',
        confirmation_email_read_date:'2018/09/06 23:19',upsell_price:'$100',check_in_date:'2018/10/01 00:00',
        check_out_date:'2018/10/10 00:00',ass_room:503,room_revenue:'$400',canceled_date:'0000/00/00 00:00'},
        {number:203499,reservation_date:'2018/09/07 07:18',welcome_email_sent_date:'2018/09/07 07:19',
         welcome_email_read_date:'2018/09/07 17:18',click_trough_date:'2018/09/07 17:28',
         selection_date:'2018/09/07 18:18',selected_room:504,confirmation_email_sent_date:'2018/09/07 18:19',
         confirmation_email_read_date:'2018/09/07 23:19',upsell_price:'$199',check_in_date:'2018/10/01 00:00',
         check_out_date:'2018/10/10 00:00',ass_room:504,room_revenue:'$499',canceled_date:'0000/00/00 00:00'},
     ]
    },{property: 'H1551',
        journeys:[
        ]
    },{property: 'DEMO',
        journeys:[
        ]
    }
  ];
  column_headers:string[][] = [
    ['Reservation','Number'],
    ['Reservation','Made'],
    ['Welcome','Email Sent'],
    ['Email','Read'],
    ['Click','Through Date'],
    ['Selection','Made'],
    ['Selected','Room'],
    ['Confirm.','Email Sent'],
    ['Email','Read'],
    ['Upsell','Price'],
    ['Check','in'],
    ['Check','out'],
    ['Assigned','Room'],
    ['Room','Revenue'],
    ['Cancelled']
  ];
  sorted_index:number = 0;
  sorted_asc:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onPropertyChange(selected_index: number):void{
    this.property_index = selected_index;
  }

  onSortArrow(col:number, asc:boolean){
    //console.log(col+" "+asc);
    this.sorted_index = col;
    this.sorted_asc = asc;
  }

}
