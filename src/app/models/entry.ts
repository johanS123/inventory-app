import IProduct from './product';

export default interface IEntry {
  Id: number;
  Name: string;
  Product: IProduct;
  EntryDate: Date;
  Quantity: number;
}
