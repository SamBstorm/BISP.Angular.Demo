import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-style',
  templateUrl: './direct-style.component.html',
  styleUrls: ['./direct-style.component.css']
})
export class DirectStyleComponent implements OnInit {

  size: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
