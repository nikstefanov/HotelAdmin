import { AfterViewInit, Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-restricted-text-input',
  templateUrl: './restricted-text-input.component.html'
})
export class RestrictedTextInputComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() value:string = "";
  @Input() init_value:string = "";
  @Input() regex:string;
  //private old_value:string = "";
  //private regExObj: RegExp;
  /*@ViewChild('input') input: ElementRef;*/

/*
* When using the constructor function, the normal string escape rules
* (preceding special characters with \ when included in a string) are necessary.
*/

  constructor() {
  }

  ngOnInit() {
    //this.old_value = this.value;
    if(!this.value && this.init_value){
      this.value = this.init_value;
    }
  }

  /*ngAfterViewInit() {
    this.input.nativeElement.value = this.init_value;
  }*/

  /*@Input() set regex(regex:string){
    this.regExObj = new RegExp(regex);
  }*/

  /*
  private onInput(event:any):void{
    if(!this.regExObj.test(event.target.value)){
      //event.target.value = this.old_value;
      this.value = this.old_value;
    }else{
      this.old_value = event.target.value;
    }
    //this.value = event.target.value;
  }

  private onChange(value1:string):void{
    if(!this.regExObj.test(value1)){
      this.value5 = this.old_value;
      console.log("False: " + this.value5);
    }else{
      this.old_value = value1;
      this.value5 = value1;
      console.log("True: " + this.value5);
    }
  }

  private onInput2(event:any):void{
    if(!this.regExObj.test(event.target.value)){
      this.value = this.old_value;
      //this.input.nativeElement.value = this.value;
      console.log("False: " + this.value);
    }else{
      this.old_value = event.target.value;
      this.value = event.target.value;
      console.log("True: " + this.value);
    }
  }*/

}
