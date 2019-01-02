import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Router } from 'express';
import mongoose from 'mongoose';
import { Routes } from './../routes/Routes';

const BASE_API: string = '/';

export class App {

  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    dotenv.config();
    this.mongoUrl();
    this.dbConfig();
    this.app.listen(process.env.PORT || 3000);
    this.routes();
  }

  private config(): void {
      // support application/json type post data
    this.app.use(bodyParser.json());
  }

  private mongoUrl() {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DATABASE);
  }

  private dbConfig() {
    const db = mongoose.connection;
    db
      .on('connected', () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
      })
      .on('error', err => {
        console.error(`🚫 Database connection error → ${err.message}`);
      });
  }

  private routes() {
    const route = new Routes();
    this.app.use(BASE_API, route.getRoutes());
  }
}
module.exports = new App().app;
