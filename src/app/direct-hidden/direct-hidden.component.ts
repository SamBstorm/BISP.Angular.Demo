import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-hidden',
  templateUrl: './direct-hidden.component.html',
  styleUrls: ['./direct-hidden.component.css']
})
export class DirectHiddenComponent implements OnInit {

  isHidden : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
