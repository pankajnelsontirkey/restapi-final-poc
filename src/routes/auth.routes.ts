import { AuthController } from '../controllers/authController';

export class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes(app): void {
    /* Signup */
    app.route('signup').post(this.authController.signup);

    /* Login */
    /* app.route('/login').post(this.authController.login); */
  }
}
