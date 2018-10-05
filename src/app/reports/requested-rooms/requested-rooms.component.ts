import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requested-rooms',
  templateUrl: './requested-rooms.component.html',
  styleUrls: ['./requested-rooms.component.css']
})
export class RequestedRoomsComponent implements OnInit {

  property_index:number = 0;
  rooms_data:any = [
    {property: 'ALGTH',
     rooms:[
       {number:104467,date:'2018/09/06 07:18', arr_date:'2018/10/05', los:1, sel_room: 319, },
       {number:104965,date:'2018/10/01 09:02', arr_date:'2018/10/06', los:1, sel_room: 206, },
       {number:105215,date:'2018/10/02 07:57', arr_date:'2018/10/10', los:1, sel_room: 317, },
       {number:105216,date:'2018/10/02 08:08', arr_date:'2018/10/11', los:1, sel_room: 114, },
       {number:105217,date:'2018/10/02 13:42', arr_date:'2018/10/11', los:1, sel_room: 374, },
       {number:105218,date:'2018/10/02 13:45', arr_date:'2018/10/17', los:1, sel_room: 307, },
       {number:105220,date:'2018/10/03 14:25', arr_date:'2018/10/19', los:1, sel_room: 218, },
       {number:105224,date:'2018/10/03 14:25', arr_date:'2018/10/25', los:1, sel_room: 218, },

       {number:104467,date:'2018/09/06 07:18', arr_date:'2018/10/05', los:1, sel_room: 318, ass_room:318},
       {number:104965,date:'2018/10/01 09:02', arr_date:'2018/10/07', los:1, sel_room: 205, ass_room:200},
       {number:105215,date:'2018/10/02 07:57', arr_date:'2018/10/10', los:1, sel_room: 319, ass_room:318},
       {number:105216,date:'2018/10/02 08:08', arr_date:'2018/10/11', los:1, sel_room: 105, ass_room:105},
       {number:105217,date:'2018/10/02 13:42', arr_date:'2018/10/11', los:1, sel_room: 305, ass_room:305},
       {number:105218,date:'2018/10/02 13:45', arr_date:'2018/10/12', los:1, sel_room: 302, ass_room:304},
       {number:105220,date:'2018/10/03 14:25', arr_date:'2018/10/13', los:1, sel_room: 219, ass_room:219},
       {number:106217,date:'2018/10/02 13:42', arr_date:'2018/10/14', los:1, sel_room: 505, ass_room:305},
       {number:106218,date:'2018/10/02 13:45', arr_date:'2018/10/19', los:1, sel_room: 312, ass_room:312},
       {number:106220,date:'2018/10/03 14:25', arr_date:'2018/10/22', los:1, sel_room: 219, ass_room:219},
     ]
    },{property: 'H1551',
        rooms:[
          {number:204467,date:'2018/09/06 07:18', arr_date:'2018/10/05', los:1, sel_room: 319, },
          {number:204965,date:'2018/10/01 09:02', arr_date:'2018/10/06', los:1, sel_room: 206, },
          {number:205215,date:'2018/10/02 07:57', arr_date:'2018/10/10', los:1, sel_room: 317, },
          {number:205216,date:'2018/10/02 08:08', arr_date:'2018/10/11', los:1, sel_room: 114, },
          {number:205217,date:'2018/10/02 13:42', arr_date:'2018/10/11', los:1, sel_room: 374, },
          {number:205218,date:'2018/10/02 13:45', arr_date:'2018/10/17', los:1, sel_room: 307, },
          {number:205220,date:'2018/10/03 14:25', arr_date:'2018/10/19', los:1, sel_room: 218, },

          {number:204467,date:'2018/09/06 07:18', arr_date:'2018/10/05', los:1, sel_room: 318, ass_room:318},
          {number:204965,date:'2018/10/01 09:02', arr_date:'2018/10/07', los:1, sel_room: 205, ass_room:200},
          {number:205215,date:'2018/10/02 07:57', arr_date:'2018/10/10', los:1, sel_room: 319, ass_room:318},
          {number:205216,date:'2018/10/02 08:08', arr_date:'2018/10/11', los:1, sel_room: 105, ass_room:105},
          {number:205217,date:'2018/10/02 13:42', arr_date:'2018/10/11', los:1, sel_room: 305, ass_room:305},
          {number:205218,date:'2018/10/02 13:45', arr_date:'2018/10/12', los:1, sel_room: 302, ass_room:304},
          {number:205220,date:'2018/10/03 14:25', arr_date:'2018/10/13', los:1, sel_room: 219, ass_room:219},
          {number:206217,date:'2018/10/02 13:42', arr_date:'2018/10/14', los:1, sel_room: 505, ass_room:305},
          {number:206218,date:'2018/10/02 13:45', arr_date:'2018/10/19', los:1, sel_room: 312, ass_room:312},
          {number:206220,date:'2018/10/03 14:25', arr_date:'2018/10/22', los:1, sel_room: 219, ass_room:219},
        ]
    },{property: 'DEMO',
        rooms:[
          {number:604467,date:'2018/09/06 07:18', arr_date:'2018/10/05', los:1, sel_room: 319, },
          {number:604965,date:'2018/10/01 09:02', arr_date:'2018/10/06', los:1, sel_room: 206, },
          {number:605215,date:'2018/10/02 07:57', arr_date:'2018/10/10', los:1, sel_room: 317, },
          {number:605216,date:'2018/10/02 08:08', arr_date:'2018/10/11', los:1, sel_room: 114, },
          {number:605217,date:'2018/10/02 13:42', arr_date:'2018/10/11', los:1, sel_room: 374, },/*
          {number:605218,date:'2018/10/02 13:45', arr_date:'2018/10/17', los:1, sel_room: 307, },
          {number:605220,date:'2018/10/03 14:25', arr_date:'2018/10/19', los:1, sel_room: 218, },*/

          {number:604467,date:'2018/09/06 07:18', arr_date:'2018/10/05', los:1, sel_room: 318, ass_room:318},
          {number:604965,date:'2018/10/01 09:02', arr_date:'2018/10/07', los:1, sel_room: 205, ass_room:200},
          {number:605215,date:'2018/10/02 07:57', arr_date:'2018/10/10', los:1, sel_room: 319, ass_room:318},
          {number:605216,date:'2018/10/02 08:08', arr_date:'2018/10/11', los:1, sel_room: 105, ass_room:105},
          {number:605217,date:'2018/10/02 13:42', arr_date:'2018/10/11', los:1, sel_room: 305, ass_room:305},
          {number:605218,date:'2018/10/02 13:45', arr_date:'2018/10/12', los:1, sel_room: 302, ass_room:304},
          {number:605220,date:'2018/10/03 14:25', arr_date:'2018/10/13', los:1, sel_room: 219, ass_room:219},
          {number:606217,date:'2018/10/02 13:42', arr_date:'2018/10/14', los:1, sel_room: 505, ass_room:305},
          {number:606218,date:'2018/10/02 13:45', arr_date:'2018/10/19', los:1, sel_room: 312, ass_room:312},
          {number:606220,date:'2018/10/03 14:25', arr_date:'2018/10/22', los:1, sel_room: 219, ass_room:219},
        ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onPropertyChange(selected_index: number):void{
    this.property_index = selected_index;
  }

}
