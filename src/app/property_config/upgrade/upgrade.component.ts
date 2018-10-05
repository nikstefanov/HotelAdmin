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
  //is_open_from_room_array:boolean[] = [];
  //is_edit_to_room_array:boolean[][] = [[],[]];
  temp_to_room_array:string[][] = [];
  room_types:string[] = ['KING','DDBL','CORN','GOVE','FOUR','AWAY','CLBK-NO','ADKS','KING-NO','PRES'];
  selectedItems:string = 'bbbb';
  upgrade_array: any = [
      {
        property:'ALGTH',
        from:[
          {
            from_room:'KING',
            to:[
              {
                to_room:'DDBL',
                amount:20.01,
                percent:0,
                enabled:true
              },{
                to_room:'CORN',
                amount:100.01,
                percent:0,
                enabled:true
              },{
                to_room:'GOVE',
                amount:350.01,
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
                amount:20.00,
                percent:0,
                enabled:false
              },{
                to_room:'AWAY',
                amount:100.00,
                percent:0,
                enabled:true
              }
            ],
            enabled:false
          },{
            from_room:'CLBK-NO',
            to:[
              {
                to_room:'DDBL',
                amount:20.01,
                percent:0,
                enabled:true
              },{
                to_room:'CORN',
                amount:100.01,
                percent:0,
                enabled:true
              }
            ],
            enabled:false
          },{
            from_room:'ADKS',
            to:[
              {
                to_room:'DDBL',
                amount:20.01,
                percent:0,
                enabled:true
              }
            ],
            enabled:false
          },{
            from_room:'KING-NO',
            to:[
              {
                to_room:'DDBL',
                amount:20.01,
                percent:0,
                enabled:true
              }
            ],
            enabled:false
          },{
            from_room:'PRES',
            to:[
              {
                to_room:'DDBL',
                amount:20.01,
                percent:0,
                enabled:true
              }
            ],
            enabled:false
          }
        ],
      },{
        property:'H1551',
        from:[
          {
            from_room:'KING',
            to:[
              {
                to_room:'DDBL',
                amount:20.00,
                percent:0,
                enabled:true
              },{
                to_room:'CORN',
                amount:100.00,
                percent:0,
                enabled:true
              },{
                to_room:'GOVE',
                amount:350.00,
                percent:0,
                enabled:true
              },
            ],
            enabled:true
          },{
            from_room:'DDBL',
            to:[],
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
        ]
      }
  ];

  constructor() {
    if(this.upgrade_array.length > 0){
      this.property_index = 0;
      //this.init_from_room_array();
      this.init_expanded_property();
      //this.init_edit_to_room_array();
      this.init_edit_property();
      this.init_to_temp_room2();
      //console.log(this.temp_to_room_array.length);
      this.init_available_rooms();
      //console.log(this.upgrade_array);
    }
  }

  ngOnInit() {
  }

  onPropertyChange(selected_index: number):void{
    //console.log(event);
    this.property_index = selected_index;
    //this.init_from_room_array();
    //this.init_edit_to_room_array();
    //this.init_edit_property();
    //this.init_to_temp_room();
  }

/*  init_from_room_array(){
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
  }*/

  deleteFromUpgrade(from_index:number):void {
    this.upgrade_array[this.property_index].from =
    this.upgrade_array[this.property_index].from.filter(
      (element, index)=>index!=from_index
    );
    this.upgrade_array[this.property_index].available_rooms = //this.room_types;
      this.getAvailableFromRooms2(this.property_index);
  }

  saveUpgrade(from_room:number, to_room:number, amount:string, percent:string):void{
    //console.log(name);//console.log(amount);console.log(percent);
    this.upgrade_array[this.property_index].from[from_room].to[to_room].to_room =
      this.upgrade_array[this.property_index].from[from_room].to[to_room].to_room_temp;
    this.upgrade_array[this.property_index].from[from_room].to[to_room].amount = amount;
    this.upgrade_array[this.property_index].from[from_room].to[to_room].percent = percent;
    //this.is_edit_to_room_array[from_room][to_room]=false;
    this.upgrade_array[this.property_index].from[from_room].to[to_room].edit=false;
    this.upgrade_array[this.property_index].from[from_room].to[to_room].new=false;
    this.upgrade_array[this.property_index].from[from_room].edit_child = false;
    if(to_room==0 &&
      this.upgrade_array[this.property_index].from[from_room].new){
        this.upgrade_array[this.property_index].from[from_room].new=false;
      }
    this.upgrade_array[this.property_index].available_rooms = this.getAvailableFromRooms2(this.property_index);
    this.upgrade_array[this.property_index].from[from_room].available_rooms =
      this.getAvailableToRooms2(this.property_index,from_room);
  }

  showSelect(sel:any):void{
    console.log(sel);
  }

  onChange():void{
    console.log(this.selectedItems);
  }

  init_edit_property():void{
    var number_of_from_rooms:number;
    var len:number = this.upgrade_array[this.property_index].from.length;
    for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
      var number_of_to_rooms: number;
      var length_of_to_rooms = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.length;
      for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
        //this.is_edit_to_room_array[number_of_from_rooms][number_of_to_rooms] = false;
        this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].edit=false;
        this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].new=false;
      }
      this.upgrade_array[this.property_index].from[number_of_from_rooms].new = false;
      this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child = false;
    }
  }

  init_expanded_property():void{
    var num:number;
    //console.log(this.upgrade_array[this.property_index]);
    var len:number = this.upgrade_array[this.property_index].from.length;
    //var len = 5;
    for (num = 0; num < len; num++) {
      //this.is_open_from_room_array[num] = false;
      this.upgrade_array[this.property_index].from[num].expanded = false;
    }
  }

  addUpgrade(number_of_from_rooms:number):void{
    var obj={
      to_room: this.upgrade_array[this.property_index].from[number_of_from_rooms].available_rooms[0],
      to_room_temp: this.upgrade_array[this.property_index].from[number_of_from_rooms].available_rooms[0],
      amount:0.00,
      percent:0,
      enabled:true,
      edit:false,
      new:true
    };
    var new_len = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.push(obj);
    this.upgrade_array[this.property_index].from[number_of_from_rooms].expanded = true;
    this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child = true;
    //this.temp_to_room_array[number_of_from_rooms][new_len-1] = this.getAvailableToRooms(number_of_from_rooms)[0];
  }

  editUpgrade(number_of_from_rooms:number, number_of_to_rooms: number):void{
    this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].edit=true;
    this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child = true;
  }

  addRoom():void{
    var new_len = this.upgrade_array[this.property_index].from.push({
      from_room:this.upgrade_array[this.property_index].available_rooms[0],
      to:[],
      enabled:false,
      new:true,
      edit_child:true,
      expanded:true,
      available_rooms: []
    });
    this.upgrade_array[this.property_index].from[new_len-1].available_rooms =
      this.getAvailableToRooms2(this.property_index,new_len-1);
    var obj={
      to_room:this.upgrade_array[this.property_index].from[new_len-1].available_rooms[0],
      to_room_temp:this.upgrade_array[this.property_index].from[new_len-1].available_rooms[0],
      amount:0.00,
      percent:0,
      enabled:true,
      edit:false,
      new: true
    };
    this.upgrade_array[this.property_index].from[new_len-1].to.push(obj);
    //console.log(new_len);console.log(this.temp_to_room_array.length);
    this.temp_to_room_array.push([]);
    //this.temp_to_room_array[new_len-1][0] = this.getAvailableToRooms(new_len-1)[0];
  }

  saveRoom(number_of_from_rooms:number){
    this.upgrade_array[this.property_index].from[number_of_from_rooms].new = false;
  }

  is_edit_from_any():boolean{
    //var is_disabled_from_any = false;
    var number_of_from_rooms:number;
    var len:number = this.upgrade_array[this.property_index].from.length;
    for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
      if(this.upgrade_array[this.property_index].from[number_of_from_rooms].new) return true;
    }
    return false;
  }

  is_edit_from_upgrade_any():boolean{
    var number_of_from_rooms:number;
    var len:number = this.upgrade_array[this.property_index].from.length;
    for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
      if(this.upgrade_array[this.property_index].from[number_of_from_rooms].new) return true;
      if(this.upgrade_array[this.property_index].from[number_of_from_rooms].edit_child) return true;
    }
    return false;
  }

  getAvailableFromRooms():string[]{
    console.log('getAvailableFromRooms');
    var unavailable_from_rooms:string[] = [];
    var number_of_from_rooms:number;
    var len:number = this.upgrade_array[this.property_index].from.length;
    for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
      unavailable_from_rooms.push(
        this.upgrade_array[this.property_index].from[number_of_from_rooms].from_room);
    }
    return this.room_types.filter(item => unavailable_from_rooms.indexOf(item) < 0)
  }

  hasAvailableFromRooms():boolean{
    //return this.getAvailableFromRooms().length > 0;
    return this.upgrade_array[this.property_index].available_rooms.length>0;
  }

  getAvailableFromRooms2(prop_number:number):string[]{
    var unavailable_from_rooms:string[] = [];
    var number_of_from_rooms:number;
    var len:number = this.upgrade_array[prop_number].from.length;
    for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
      unavailable_from_rooms.push(
        this.upgrade_array[prop_number].from[number_of_from_rooms].from_room);
    }
    return this.room_types.filter(item => unavailable_from_rooms.indexOf(item) < 0)
  }

  delete_cancel_upgrade(from_index:number, to_index:number):void{
    /*if(!this.upgrade_array[this.property_index].from[from_index].to[to_index].edit &&
        !this.upgrade_array[this.property_index].from[from_index].to[to_index].new &&
        !this.upgrade_array[this.property_index].from[from_index].new && to_index>=1){
          deleteUpgrade(from_index, to_index);
        }
    if((upgrade_array[property_index].from[from_index].to[to_index].new &&
          !upgrade_array[property_index].from[from_index].new)
        || upgrade_array[property_index].from[from_index].to[to_index].edit){
          cancelUpgrade(from_index, to_index);
        }*/
        if(this.upgrade_array[this.property_index].from[from_index].to[to_index].edit){
          this.cancelUpgrade(from_index, to_index);
        }else{
          this.deleteUpgrade(from_index, to_index);
        }
  }

  deleteUpgrade(from_index:number, to_index:number):void {
    if(this.upgrade_array[this.property_index].from[from_index].to[to_index].edit ||
       this.upgrade_array[this.property_index].from[from_index].to[to_index].new)
        this.upgrade_array[this.property_index].from[from_index].edit_child = false;
    this.upgrade_array[this.property_index].from[from_index].to =
    this.upgrade_array[this.property_index].from[from_index].to.filter(
      (element, index)=>index!=to_index
    );
    this.upgrade_array[this.property_index].from[from_index].available_rooms =
      this.getAvailableToRooms2(this.property_index,from_index);
  }

  cancelUpgrade(from_index:number, to_index:number):void{
    this.upgrade_array[this.property_index].from[from_index].to[to_index].edit = false;
    this.upgrade_array[this.property_index].from[from_index].edit_child = false;
    this.upgrade_array[this.property_index].from[from_index].to[to_index].to_room_temp =
      this.upgrade_array[this.property_index].from[from_index].to[to_index].to_room;
  }

  getAvailableToRooms(from_index:number):string[]{
    //console.log('getAvailableToRooms');
    //return ['ADKS','KING','KING-NO'];
    var unavailable_to_rooms:string[] = [this.upgrade_array[this.property_index].from[from_index].from_room];
    var number_of_to_rooms:number;
    var len:number = this.upgrade_array[this.property_index].from[from_index].to.length;
    console.log(len);
    for (number_of_to_rooms = 0; number_of_to_rooms < len; number_of_to_rooms++) {
      console.log(number_of_to_rooms);
      /*unavailable_to_rooms.push(
        this.upgrade_array[this.property_index].from[from_index].to[number_of_to_rooms].to_room);*/
    }

    //return this.room_types.filter(item => unavailable_to_rooms.indexOf(item) < 0);
    return [];
  }

  hasAvailableToRooms(from_index:number):boolean{
    //return this.getAvailableToRooms(from_index).length > 0;
    return this.upgrade_array[this.property_index].from[from_index].available_rooms.length>0;
  }

  getAvailableToRooms2(prop_number:number, from_index:number):string[]{
    var unavailable_to_rooms:string[] = [this.upgrade_array[prop_number].from[from_index].from_room];
    var number_of_to_rooms:number;
    var len:number = this.upgrade_array[prop_number].from[from_index].to.length;
    //console.log(len);
    for (number_of_to_rooms = 0; number_of_to_rooms < len; number_of_to_rooms++) {
      //console.log(number_of_to_rooms);
      unavailable_to_rooms.push(
        this.upgrade_array[this.property_index].from[from_index].to[number_of_to_rooms].to_room);
    }

    return this.room_types.filter(item => unavailable_to_rooms.indexOf(item) < 0);
  }

  init_to_temp_room():void{
    this.temp_to_room_array = [];
    var number_of_from_rooms:number;
    var len:number = this.upgrade_array[this.property_index].from.length;//console.log('len'+len);
    for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
      //console.log('from:'+number_of_from_rooms);
      this.temp_to_room_array[number_of_from_rooms] = [];
      var number_of_to_rooms: number;
      var length_of_to_rooms = this.upgrade_array[this.property_index].from[number_of_from_rooms].to.length;
      //console.log('length_of_to_rooms'+length_of_to_rooms);
      for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
        //console.log('to:'+number_of_to_rooms);
        this.temp_to_room_array[number_of_from_rooms][number_of_to_rooms]=
          this.upgrade_array[this.property_index].from[number_of_from_rooms].to[number_of_to_rooms].to_room;
        //console.log('from'+number_of_from_rooms);console.log('to'+number_of_to_rooms);
      }
    }
  }

  init_to_temp_room2():void{
    var prop_number:number;
    var prop_len:number = this.upgrade_array.length;
    for(prop_number = 0; prop_number < prop_len; prop_number++){
      var number_of_from_rooms:number;
      var len:number = this.upgrade_array[prop_number].from.length;//console.log('len'+len);
      for (number_of_from_rooms = 0; number_of_from_rooms < len; number_of_from_rooms++) {
        //console.log('from:'+number_of_from_rooms);
        //this.temp_to_room_array[number_of_from_rooms] = [];
        var number_of_to_rooms: number;
        var length_of_to_rooms = this.upgrade_array[prop_number].from[number_of_from_rooms].to.length;
        //console.log('length_of_to_rooms'+length_of_to_rooms);
        for (number_of_to_rooms = 0; number_of_to_rooms < length_of_to_rooms; number_of_to_rooms++) {
          //console.log('to:'+number_of_to_rooms);
          //this.temp_to_room_array[number_of_from_rooms][number_of_to_rooms]=
          this.upgrade_array[prop_number].from[number_of_from_rooms].to[number_of_to_rooms].to_room_temp =
            this.upgrade_array[prop_number].from[number_of_from_rooms].to[number_of_to_rooms].to_room;
          //console.log('from'+number_of_from_rooms);console.log('to'+number_of_to_rooms);
        }
      }
    }
  }
  init_available_rooms():void{
    //console.log("init_available_rooms");
    /*
    for (var property_data in this.upgrade_array) {
        property_data.available_rooms=this.room_types;
        for (var from_room_data in property_data.from) {
            from_room_data.available_rooms=this.room_types;
        }
    }*/

    var prop_number:number;
    var prop_len:number = this.upgrade_array.length;
    //console.log(prop_len);
    var from_number:number;
    var from_len:number;
    for(prop_number = 0; prop_number < prop_len; prop_number++){
      this.upgrade_array[prop_number].available_rooms = //this.room_types;
        this.getAvailableFromRooms2(prop_number);
      from_len = this.upgrade_array[prop_number].from.length;
      //console.log(from_len);
      for(from_number = 0; from_number < from_len; from_number++){
        this.upgrade_array[prop_number].from[from_number].available_rooms = //this.room_types;
          this.getAvailableToRooms2(prop_number,from_number);
      }
    }
    //console.log(this.upgrade_array);
  }

  changeFromRoomSelect(from_index:number):void{
    this.upgrade_array[this.property_index].from[from_index].available_rooms = //this.room_types;
      this.getAvailableToRooms2(this.property_index,from_index);
    this.upgrade_array[this.property_index].from[from_index].to[0].to_room =
      this.upgrade_array[this.property_index].from[from_index].available_rooms[0];
      this.upgrade_array[this.property_index].from[from_index].to[0].to_room_temp =
        this.upgrade_array[this.property_index].from[from_index].available_rooms[0];
  }

}
