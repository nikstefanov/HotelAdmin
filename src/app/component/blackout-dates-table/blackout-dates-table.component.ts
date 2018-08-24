import {NgbDateStruct, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {Component, ViewChild, ViewEncapsulation} from '@angular/core';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-blackout-dates-table',
  templateUrl: './blackout-dates-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./blackout-dates-table.component.css']
})
export class BlackoutDatesTableComponent {

    blackout_dates:string[][] =
      [['7/15/2018','7/25/2018'],['8/15/2018','8/25/2018'],['9/15/2018','9/25/2018']];
    selected_table_row:number = -1;
    hoveredDate: NgbDateStruct;
    startDate: NgbDateStruct;
    fromDate: NgbDateStruct;
    toDate: NgbDateStruct;
    dateFormatter: NgbDateParserFormatter;
    today: NgbDateStruct;

    greeting = {};
    name = 'World';
    @ViewChild('ppov') public popover: NgbPopover;

    public changeGreeting(greeting: any): void {
      const isOpen = this.popover.isOpen();
      this.popover.close();
      if (greeting !== this.greeting || !isOpen) {
        this.greeting = greeting;
        this.popover.open(greeting);
      }
    }

    /*close_ppover(){
      console.log("Close Btn");
      this.popover.close();
    }*/

    constructor(calendar: NgbCalendar, formatter: NgbDateParserFormatter) {
      this.today = calendar.getToday();
      this.dateFormatter = formatter;
    }



    onDateTableLineSelection(i:number){
      //console.log(i);
      this.selected_table_row=i;
    }

    onDateSelection(date: NgbDateStruct) {
      //console.log(date);
      if (!this.fromDate && !this.toDate) {
        this.fromDate = date;
      } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
        this.toDate = date;
        /*this.blackout_dates.push(new Array(
          ""+this.fromDate.month+"/"+this.fromDate.day+"/"+this.fromDate.year,
          ""+this.toDate.month+"/"+this.toDate.day+"/"+this.toDate.year));
        //d.close();*/
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

    prepareDatesEdit(/*event: MouseEvent*/){
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

    onClickEdit(event: MouseEvent){
      if(this.selected_table_row > -1){
        this.prepareDatesEdit();
        this.startDate = this.fromDate;
        this.popover.open();
      }
    }

    onClickAdd(event: MouseEvent){
      this.selected_table_row = -1;
      this.startDate = this.today;
      this.fromDate = null;
      this.toDate = null;
      this.popover.open();
    }

    onClickApply(event: MouseEvent){
      if (this.fromDate && this.toDate) {
        if(this.selected_table_row > -1){
          this.blackout_dates[this.selected_table_row][0] =
            ""+this.fromDate.month+"/"+this.fromDate.day+"/"+this.fromDate.year
          this.blackout_dates[this.selected_table_row][1] =
            ""+this.toDate.month+"/"+this.toDate.day+"/"+this.toDate.year
        }else{
          this.blackout_dates.push(new Array(
            ""+this.fromDate.month+"/"+this.fromDate.day+"/"+this.fromDate.year,
            ""+this.toDate.month+"/"+this.toDate.day+"/"+this.toDate.year));
        }
      }
      this.popover.close();
    }

    isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
    isInside = date => after(date, this.fromDate) && before(date, this.toDate);
    isFrom = date => equals(date, this.fromDate);
    isTo = date => equals(date, this.toDate);
}
