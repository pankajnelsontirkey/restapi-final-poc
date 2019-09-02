import { AuthController } from '../controllers/authController';

export class AuthRoutes {
  public authController: AuthController;

  public routes(app): void {
    /* Login */
    app.route('/login').post(this.authController.login);
  }
}
