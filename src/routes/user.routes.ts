import { UserController } from '../controllers/userController';
import { Verifier } from '../middleware/loginMiddleware';

export class UserRoutes {
  public userController: UserController = new UserController();

  public routes(app): void {
    /* Get all users */
    app.route('/users').get(this.userController.getUsers);

    /* Add new user */
    app.route('/users').post(this.userController.addNewUser);

    /* Get user by id */
    app
      .route('/users/:id')
      .get([new Verifier().verify], this.userController.getUserById);

    /** TODO!!!
     *  app.route('/login').post(this.userController.login); */

    /** Update user
     * NOT MENTIONED IN REQUIREMENTS!
     */
    /* app.route('/users').put(this.userController.updateUser); */

    /** DELETE /users/:id
     * NOT MENTIONED IN REQUIREMENTS!
     */
    /* app.route('/users').delete(this.userController.deleteUser); */
  }
}
