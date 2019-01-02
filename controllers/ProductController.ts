import { Request, Response } from 'express';
import { ProductDAO } from './../db/ProductDAO';

export class ProductController {
  public async getAllProducts(req: Request, res: Response) {
    const dao = new ProductDAO();
    const data = await dao.getAllProducts();

    res.status(200).send(data);
  }

  public async getProductByName(req: Request, res: Response) {
    const dao = new ProductDAO();
    const data = await dao.getProductByName(req.params.name);

    res.status(200).send(data);
  }
  public async createNewProduct(req: Request, res: Response) {
    const dao = new ProductDAO();
    const data = await dao.createNewProduct(req.body);
    // TODO err if not persisted
    res.status(200).send({ message: 'Created' });
  }

  public index(req: Request, res: Response): void {
    const home = {
      data: 'Welcome to the home page',
    };
    res.status(200).send(JSON.stringify(home));
  }
}
