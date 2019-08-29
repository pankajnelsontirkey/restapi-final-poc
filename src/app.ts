import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { UserRoutes } from './routes/employeeRoutes';
import { AdminRoutes } from 'routes/userRoutes';

class App {
  public app: express.Application;
  public userRoutes: UserRoutes = new UserRoutes();
  // public adminRoutes: AdminRoutes = new AdminRoutes();
  // public usersMongoUrl: string = process.env.ADMIN_MONGO_URI;
  // public adminMongoUrl: string = process.env.USER_MONGO_URI;
  public dbaMongoUrl: string = process.env.DBA_MONGO_URI;

  constructor() {
    this.app = express();
    this.config();
    this.userRoutes.routes(this.app);
    // this.adminRoutes.routes(this.app);
    this.dbSetup();
  }

  private config(): void {
    /* Use bodyParser */
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private dbSetup(): void {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(this.dbaMongoUrl);
  }
}

export default new App().app;
