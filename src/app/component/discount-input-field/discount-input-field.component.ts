import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-input-field',
  templateUrl: './discount-input-field.component.html',
  styleUrls: ['./discount-input-field.component.css']
})
export class DiscountInputFieldComponent implements OnInit {

  private percent_discount: boolean = true;
  private previous_value:string = "";

  constructor() { }

  ngOnInit() {
  }

  private set_percent_discount(new_val:boolean):void{
    this.percent_discount = new_val;
  }

  private onKey(event: any):void{
    //console.log(event);
    var regex = /*new RegExp('[0-9]')*/ /^[0-9]*$/;
    if(/*event.target.value.length>0 &&
      (isNaN(event.target.value) || !Number.isInteger(parseInt(event.target.value,10)))*/
    !regex.test(event.target.value)){
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
  }

}
