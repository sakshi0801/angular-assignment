import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public data="";
  @Output() child2Event=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.child2Event.emit(this.data);
  }

}
