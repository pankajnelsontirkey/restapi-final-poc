import * as express from 'express';
import * as bodyParser from 'body-parser';
import { UserRoutes } from './routes/userRoutes';
import { AdminRoutes } from 'routes/adminRoutes';

class App {
  public app: express.Application;
  public userRoutes: UserRoutes = new UserRoutes();
  public adminRoutes: AdminRoutes = new AdminRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.userRoutes.routes(this.app);
    this.adminRoutes.routes(this.app);
  }

  private config(): void {
    /* Use bodyParser */
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
