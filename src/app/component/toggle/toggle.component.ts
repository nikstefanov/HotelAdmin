import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  private _checked:boolean = true;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set checked(value: boolean) {
    this._checked = value;
  }

  get checked(): boolean { return this._checked;}

  setChecked(value: boolean) {
    this._checked = value;
    this.checkedChange.emit(value);
  }


}
