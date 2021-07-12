import { IProduct } from './../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direct-struct-if-sup',
  templateUrl: './direct-struct-if-sup.component.html',
  styleUrls: ['./direct-struct-if-sup.component.css']
})
export class DirectStructIfSupComponent implements OnInit {

  private _list: IProduct[] = [
    new Product("Pomme", "Fruit", 3.99),
    new Product("Poire", "Fruit", 2.99),
    new Product("Tomate", "Légume", 1.99)
  ];
  public categorie: string = "";

  public get filteredList() {
    return (this.categorie === "" || this.categorie === undefined) ? this._list : this._list.filter(f => f.Cat === this.categorie);
  }

  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      p => this.getCategory(p['cat']));
    this.activatedRoute.queryParams.subscribe(
      qp => console.log(qp)
    );
  }

  private getCategory(value: string){
    this.categorie = value;
  }

}
