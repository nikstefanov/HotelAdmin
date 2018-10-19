import { Component } from '@angular/core';
/*
import {NgbDateStruct, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;
*/
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
/*
  blackout_dates:string[][] =
    [['7/15/2018','7/25/2018'],['8/15/2018','8/25/2018'],['9/15/2018','9/25/2018']];
  selected_table_row:number = -1;
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  dateFormatter: NgbDateParserFormatter;

  constructor(calendar: NgbCalendar, formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    this.dateFormatter = formatter;
  }

  ngOnInit() {
  }

  onDateTableLineSelection(i:number){
    //console.log(i);
    this.selected_table_row=i;
  }

  onDateSelection(date: NgbDateStruct) {
    console.log(date);
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
      this.blackout_dates.push(new Array(
        ""+this.fromDate.month+"/"+this.fromDate.day+"/"+this.fromDate.year,
        ""+this.toDate.month+"/"+this.toDate.day+"/"+this.toDate.year));
      //d.close();
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  onClickDelete(event: MouseEvent){
    if (this.selected_table_row > -1) {
       this.blackout_dates.splice(this.selected_table_row, 1);
       this.selected_table_row = -1;
    }
  }

  prepareDatesEdit(event: MouseEvent){
    if (this.selected_table_row > -1) {
      this.fromDate = this.dateFormatter.parse(this.blackout_dates[this.selected_table_row][0]);
      var fd = this.blackout_dates[this.selected_table_row][0].split("/", 3);
      this.fromDate.day=parseInt(fd[1]); this.fromDate.month=parseInt(fd[0]);this.fromDate.year=parseInt(fd[2]);

      this.toDate = this.dateFormatter.parse(this.blackout_dates[this.selected_table_row][1]);
      fd = this.blackout_dates[this.selected_table_row][1].split("/", 3);
      this.toDate.day=parseInt(fd[1]);this.toDate.month=parseInt(fd[0]);this.toDate.year=parseInt(fd[2]);


      //console.log(this.fromDate);console.log(this.toDate);
    }
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
*/

  public onSave(){
    console.log('onSave');
  }
}
