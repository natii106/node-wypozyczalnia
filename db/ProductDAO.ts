import { IProduct, Product } from './../models/Product';

export class ProductDAO {

  public async getAllProducts(): Promise<IProduct[]> {
    const products = await Product.find({});
    return products;
  }

  public async getProductByName(name: string): Promise<IProduct[]> {
    const prod = await Product.find({ name });
    return prod;
  }

  public createNewProduct(product: IProduct): void {
    const newProduct = new Product(product);
    newProduct.save();
  }
}
