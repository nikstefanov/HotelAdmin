import { Component, Input, ViewChild, ElementRef,
  AfterContentChecked, AfterContentInit, OnInit } from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-multi-select-table',
  templateUrl: './multi-select-table.component.html',
  styleUrls: ['./multi-select-table.component.css']
})
export class MultiSelectTableComponent
  implements OnInit, AfterContentChecked, AfterContentInit  {

  @Input() options: String[] = [];
  @ViewChild('options_table_container') ot_container: ElementRef;
  @ViewChild('newOptionTooltip') tooltip: NgbTooltip;
  private optionsMap: boolean[] = [];
  private newOptionInput: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }
  ngAfterContentInit() {
    for (var _i = 0; _i < this.options.length; _i++) {
      this.optionsMap.push(false);
    }
  }
  ngAfterContentChecked() {
  }

  private toggleLineSelection(i:number):void{
    this.optionsMap[i] = !this.optionsMap[i];
  }

  private newOption():void{
    this.showNewOptionField(true);
  }

  private showNewOptionField(show:boolean):void{
    let table = this.ot_container.nativeElement.getElementsByTagName('table')[0];
    let rows = table.getElementsByTagName('tr');
    rows[rows.length-1].classList.remove(show?'d-none':'d-table-row');
    rows[rows.length-1].classList.add(show?'d-table-row':'d-none');
    this.ot_container.nativeElement.scrollTop =
      this.ot_container.nativeElement.scrollHeight;
    rows[rows.length-1].getElementsByTagName('td')[0].getElementsByTagName('input')[0].focus();
    /*if(show){
      this.tooltip.open();
    }else{
      this.tooltip.close();
    }*/
  }

  private onNewOptionEntered(event:any):void{
    if(event.target.value.length>0){
      this.options.push(event.target.value);
      this.optionsMap.push(false);
      event.target.value = "";
    }
    this.showNewOptionField(false);
  }

}
