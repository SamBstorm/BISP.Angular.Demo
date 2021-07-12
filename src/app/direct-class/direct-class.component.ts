import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-class',
  templateUrl: './direct-class.component.html',
  styleUrls: ['./direct-class.component.css']
})
export class DirectClassComponent implements OnInit {

  isFemale : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
