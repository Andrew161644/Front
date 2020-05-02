
export class Product {
  public id: number;
  public name:string;
  public img: string;
  public price: number;
  constructor(name: string,  price: number,id: number) {
    this.name = name;
    this.img="";
    this.id=id;
    this.price = price;
  }
}


