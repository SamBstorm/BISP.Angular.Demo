import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-event-sup',
  templateUrl: './direct-event-sup.component.html',
  styleUrls: ['./direct-event-sup.component.css']
})
export class DirectEventSupComponent implements OnInit {

  public currency : string ="";

  constructor() { }

  ngOnInit(): void {
  }

  public setCurrency(choice:HTMLSelectElement){
      this.currency = choice.value;
  }
}
