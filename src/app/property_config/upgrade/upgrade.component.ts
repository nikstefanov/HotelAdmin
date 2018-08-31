import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  data_array: object[] = [
      {
        property:'ALGTH',
        data:[
          {
            room_type:'KING',
            upgrades:[
              {
                upgrade_type:'DDBL',
                amount:20,
                percent:0,
                enabled:true
              },{
                upgrade_type:'CORN',
                amount:100,
                percent:0,
                enabled:true
              },{
                upgrade_type:'GOVE',
                amount:350,
                percent:0,
                enabled:true
              },
            ],
            enabled:true
          },{
            room_type:'DDBL',
            upgrades:[],
            enabled:false
          },{
            room_type:'CLBK-NO',
            upgrades:[],
            enabled:false
          },{
            room_type:'ADKS',
            upgrades:[],
            enabled:false
          },{
            room_type:'KING-NO',
            upgrades:[],
            enabled:false
          },{
            room_type:'PRES',
            upgrades:[],
            enabled:false
          }
        ],
      },{
        property:'H1551',
        data:[
          {
            room_type:'KING',
            upgrades:[
              {
                upgrade_type:'DDBL',
                amount:20,
                percent:0,
                enabled:true
              },{
                upgrade_type:'CORN',
                amount:100,
                percent:0,
                enabled:true
              },{
                upgrade_type:'GOVE',
                amount:350,
                percent:0,
                enabled:true
              },
            ],
            enabled:true
          },{
            room_type:'DDBL',
            upgrades:[],
            enabled:false
          },{
            room_type:'CLBK-NO',
            upgrades:[],
            enabled:false
          },{
            room_type:'ADKS',
            upgrades:[],
            enabled:false
          },{
            room_type:'KING-NO',
            upgrades:[],
            enabled:false
          },{
            room_type:'PRES',
            upgrades:[],
            enabled:false
          }
        ]
      }
  ];

  constructor() { }

  ngOnInit() {
  }

}
