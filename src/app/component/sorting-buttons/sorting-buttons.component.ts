import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-buttons',
  templateUrl: './sorting-buttons.component.html',
  styleUrls: ['./sorting-buttons.component.css']
})
export class SortingButtonsComponent implements OnInit {

  @Output() direction_emitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick(asc: boolean){
    this.direction_emitter.emit(asc);
  }

}
