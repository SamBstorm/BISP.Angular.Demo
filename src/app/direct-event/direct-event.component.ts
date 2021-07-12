import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-event',
  templateUrl: './direct-event.component.html',
  styleUrls: ['./direct-event.component.css']
})
export class DirectEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public moveball(e: MouseEvent, b : HTMLElement){
    console.log(e);
    let size = 32;
    b.style.position = "relative";
    b.style.top = e.clientY-(size/2)+"px";
    b.style.left = e.clientX-(size/2)+"px";
  }

}
