import { Directive, ElementRef, HostListener, Input } from '@angular/core';
//import {Subject} from 'rxjs';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appRegexMask]'
})
export class RegexMaskDirective {

  private old_value:string = "";
  private regExObj: RegExp;
  //private valEmitter: Subject<string> = new Subject();

  @Input() set regex(regex:string){
    this.regExObj = new RegExp(regex);
  }

  constructor(//public ngControl: NgControl,
     private el: ElementRef) { }

  @HostListener('input', ['$event'])
  input(event) {
    this.onInputChange(event);
  }

  @HostListener('focus', ['$event'])
  focus(event) {
    //this.onInputChange(event);
    this.old_value = event.target.value;
  }

  onInputChange(event){
    console.log("Input Event");
    if(this.regExObj.test(event.target.value)){
      this.old_value = event.target.value;
    }else{
      this.el.nativeElement.value = this.old_value;
      console.log("new value: " + this.old_value);
      let event = new ChangeEvent("input event created by me");
      this.el.nativeElement.dispatchEvent(event);
    }
    //console.log('VAL: ' + this.old_value);
    //this.valEmitter.next(this.old_value);
  }

}
/*
* Credits:
* https://stackoverflow.com/a/37887432/10069950
* https://stackblitz.com/edit/angular5-phone-mask-directive?file=app%2Fphone-mask.directive.ts
*/
