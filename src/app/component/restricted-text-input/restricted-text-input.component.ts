import { AfterViewInit, Component, ElementRef, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-restricted-text-input',
  templateUrl: './restricted-text-input.component.html'
})
export class RestrictedTextInputComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() init_value:string = "";
  @ViewChild('input') input: ElementRef;
  private old_value:string = "";
/*
* When using the constructor function, the normal string escape rules
* (preceding special characters with \ when included in a string) are necessary.
*/
  private regExObj: RegExp;


  constructor() {
  }

  ngOnInit() {
    this.old_value = this.init_value;
  }

  ngAfterViewInit() {
    this.input.nativeElement.value = this.init_value;
  }

  @Input() set regex(regex:string){
    this.regExObj = new RegExp(regex);
  }

  private onInput(event:any):void{
    if(!this.regExObj.test(event.target.value)){
      event.target.value = this.old_value;
    }else{
      this.old_value = event.target.value;
    }
  }

}
