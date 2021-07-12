import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  listOfRoute :any[]=
  [
    {path:"event/event", linkName:"Directive d'évènement poisition souris" },
    {path:"event/event-sup", linkName:"Directive d'évènement" },
    {path:"attribute/hidden", linkName:"Directive d'attribut Hidden" },
    {path:"attribute/class", linkName:"Directive d'attribut [ngClass]" },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
