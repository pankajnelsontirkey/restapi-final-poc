import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

import { EmployeeRoutes } from './routes/employee.routes';
import { UserRoutes } from './routes/user.routes';

export class App {
  public app: express.Application;
  public dba_db_uri: string = process.env.DBA_DB_URI;

  public employeeRoutes: EmployeeRoutes = new EmployeeRoutes();
  public userRoutes: UserRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.employeeRoutes.routes(this.app);
    this.userRoutes.routes(this.app);
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

    mongoose.connect(this.dba_db_uri, { useNewUrlParser: true });
  }
}
