import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-discount-input-field',
  templateUrl: './discount-input-field.component.html',
  styleUrls: ['./discount-input-field.component.css']
})
export class DiscountInputFieldComponent implements OnInit {

  private percent_discount: boolean = true;
  private real_value:string;
  private regex = '^(?:.{0}|0|[1-9][0-9]*)$';
  private regExObj: RegExp = new RegExp(this.regex);
  @Output() private valueChange = new EventEmitter<string>();
  @Output() private discountTypeChange = new EventEmitter<boolean>();
  @Input() public discountType:boolean = true;
  @Input() set value(value1:string){
    if(this.regExObj.test(value1)){
      this.real_value = value1;
    }else{
      this.real_value = "";
    }
  }

  constructor() { }

  ngOnInit() {
  }

  private set_discount_type(new_val:boolean):void{
    this.discountType = new_val;
    this.discountTypeChange.emit(this.discountType);
  }

  private on_text_field_update(value1:string){
    this.real_value = value1;
    this.valueChange.emit(value1);
  }
/*
  private onKey(event: any):void{
    //console.log(event);
    var regex = /^[0-9]*$/;
    if(!regex.test(event.target.value)){
      event.target.value = this.previous_value;
    }else{
      if(event.target.value.length>0){
        event.target.value = parseInt(event.target.value,10);
      }
      this.previous_value = event.target.value;
    }
  }

  private onPaste(event: any):void{
    console.log(event);
    console.log(event.target)
    console.log(event.target.value.length);
    console.log(event.target.type);
  }*/

}
