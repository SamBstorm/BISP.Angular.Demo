import { IProduct } from './iproduct';
export class Product implements IProduct{
    public Name: string;
    public Cat: string;
    public Price: number;

    constructor (name:string, cat : string, price: number){
        this.Name = name;
        this.Cat = cat;
        this.Price = price;
    }
}
