import { Document, model, Schema } from 'mongoose';


export interface IProduct extends Document {
  id: string;
  name: string;
  price: number;
  color: string;
  brand: string;
  categories: string[];
}

const productSchema = new Schema({
  name: {
    // przy takiej deklaracji typów musimy uzyć duzego Stringa, nie mam pojecia czemu tutaj a wyzej nie
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  color: String,
  brand: {
      type: String,
      required: true
  },
  categories: Array
});

export const Product = model<IProduct>('Product', productSchema);
