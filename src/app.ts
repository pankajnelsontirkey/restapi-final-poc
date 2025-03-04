import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

import { EmployeeRoutes } from './routes/employee.routes';
import { UserRoutes } from './routes/user.routes';
import { AuthRoutes } from './routes/auth.routes';

export class App {
  public app: express.Application;
  private db_uri: string = process.env.DB_URI;

  public authRoutes: AuthRoutes = new AuthRoutes();
  public userRoutes: UserRoutes = new UserRoutes();
  public employeeRoutes: EmployeeRoutes = new EmployeeRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.authRoutes.routes(this.app);
    this.userRoutes.routes(this.app);
    this.employeeRoutes.routes(this.app);
    this.dbSetup();
  }

  private config(): void {
    /* Use CORS */
    this.app.use(cors());

    /* Use bodyParser */
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private dbSetup(): void {
    (<any>mongoose).Promise = global.Promise;

    mongoose.connect(this.db_uri);
  }
}
