import { AuthController } from '../controllers/authController';

export class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes(app): void {
    /* Login */
    app.route('/login').post(this.authController.login);

    /* Signup */
    app.route('signup').post(this.authController.signup);
  }
}
