import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  compteur: number = 10;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let page = this;
    let interval = setInterval(function(){
      page.compteur--;
    },1000)
    setTimeout(function(){
      clearInterval(interval);
      page.router.navigate(["attribute","class"]);
      // page.router.navigateByUrl("attribute/class");
    }, this.compteur*1000); 
  }

}
