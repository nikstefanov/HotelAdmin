import { Component, OnInit } from '@angular/core';
//import { NgSelectModule } from '@ng-select/ng-select';
//import { FormsModule } from '@angular/forms';
import { RestrictedTextInputComponent } from '../../component/restricted-text-input/restricted-text-input.component';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  property_index:number = -1;
  is_open_from_room_array:boolean[] = [];
  is_edit_to_room_array:boolean[][] = [[],[]];
  room_types:string[] = ['aaaa','bbbb','cccc','dddd','eeee'];
  selectedItems:string = 'bbbb';
  upgrade_array: object[] = [
      {
        property:'ALGTH',
        from:[
          {
            from_room:'KING',
            to:[
              {
                to_room:'DDBL',
                amount:20,
                percent:0,
                enabled:true
              },{
                to_room:'CORN',
                amount:100,
                percent:0,
                enabled:true
              },{
                to_room:'GOVE',
                amount:350,
                percent:0,
                enabled:true
              },
            ],
            enabled:true
          },{
            from_room:'DDBL',
            to:[
              {
                to_room:'FOUR',
                amount:20,
                percent:0,
                enabled:false
              },{
                to_room:'AWAY',
                amount:100,
                percent:0,
                enabled:true
              }
            ],
            enabled:false
          },{
            from_room:'CLBK-NO',
            to:[],
            enabled:false
          },{
            from_room:'ADKS',
            to:[],
            enabled:false
          },{
            from_room:'KING-NO',
            to:[],
            enabled:false
          },{
            from_room:'PRES',
            to:[],
            enabled:false
          }
        ],
      },{
        property:'H1551',
        from:[
          {
            from_room:'KING1',
            to:[
              {
                to_room:'DDBL',
                amount:20,
                percent:0,
                enabled:true
              },{
                to_room:'CORN',
                amount:100,
                percent:0,
                enabled:true
              },{
                to_room:'GOVE',
                amount:350,
                percent:0,
                enabled:true
              },
            ],
            enabled:true
          },{
            from_room:'DDBL1',
            to:[],
            enabled:false
          },{
            from_room:'CLBK2-NO',
            to:[],
            enabled:false
          },{
            from_room:'ADKS1',
            to:[],
            enabled:false
          },{
            from_room:'KING2-NO',
            to:[],
            enabled:false
          },{
            from_room:'PRES1',
            to:[],
            enabled:false
          }
        ]
      }
  ];

  constructor() {
    if(this.upgrade_array.length > 0){
      this.property_index = 0;
      this.init_from_room_array();
      this.init_edit_to_room_array();
    }
  }

  ngOnInit() {
  }

  onPropertyChange(selected_index: number){
    //console.log(event);
    this.property_index = selected_index;
    this.init_from_room_array();
    this.init_edit_to_room_array();
  }

  init_from_room_array(){
    var num:number;
    //console.log(this.upgrade_array[this.property_index]);
    var len:number = this.upgrade_array[this.property_index].from.length;
    //var len = 5;
    for (num = 0; num < len; num++) {
      this.is_open_from_room_array[num] = false;
    }
  }

  init_edit_to_room_array(){
    var number_of_from_rooms:number;
    var len:number = this.upgrade_array[this.property_index].from.length;
    for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
      var number_of_to_rooms: number;
      var length_of_to_rooms = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.length;
      for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
        this.is_edit_to_room_array[number_of_from_rooms][number_of_to_rooms] = false;
      }
    }
  }

  deleteUpgrade(from_index:number, to_index:number) {
    this.upgrade_array[this.property_index].from[from_index].to =
    this.upgrade_array[this.property_index].from[from_index].to.filter(
      (element, index)=>index!=to_index
    );
  }

  deleteFromUpgrade(from_index:number) {
    this.upgrade_array[this.property_index].from =
    this.upgrade_array[this.property_index].from.filter(
      (element, index)=>index!=from_index
    );
  }

  saveUpgrade(from_room:number, to_room:number, name:string, amount:string, percent:string){
    //console.log(name);console.log(amount);console.log(percent);
    this.upgrade_array[this.property_index].from[from_room].to[to_room].to_room = name;
    this.upgrade_array[this.property_index].from[from_room].to[to_room].amount = amount;
    this.upgrade_array[this.property_index].from[from_room].to[to_room].percent = percent;
    this.is_edit_to_room_array[from_room][to_room]=false;

  }

  showSelect(sel:any){
    console.log(sel);
  }

  onChange(){
    console.log(this.selectedItems);
  }

}
