import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-struct-switch',
  templateUrl: './direct-struct-switch.component.html',
  styleUrls: ['./direct-struct-switch.component.css']
})
export class DirectStructSwitchComponent implements OnInit {

  choix : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
