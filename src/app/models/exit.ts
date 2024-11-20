import IProduct from './product';

export default interface IEXit {
  Id: number;
  Name: string;
  Product: IProduct;
  ExitDate: Date;
  Quantity: number;
}
