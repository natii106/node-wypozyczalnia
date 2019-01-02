import express, { Router } from 'express';
import { ProductController } from './../controllers/ProductController';

export class Routes {

  public ctrl: ProductController;
  public router: Router;

  constructor() {
    this.ctrl = new ProductController();
    this.router = express.Router();
  }

  public getRoutes(): Router {
    this.router.get('/', this.ctrl.index);
    this.router.get('/products', this.ctrl.getAllProducts);
    this.router.get('/product/:name', this.ctrl.getProductByName);
    this.router.post('/product', this.ctrl.createNewProduct);

    return this.router;
  }
}
