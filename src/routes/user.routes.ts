import { UserController } from '../controllers/userController';

export class UserRoutes {
  public userController: UserController = new UserController();

  public routes(app): void {
    /* Get all users */
    app.route('/users').get(this.userController.getUsers);

    /* Add new user */
    app.route('/users').post(this.userController.addNewUser);

    /* Get user by id */
    app.route('/users/:id').get(this.userController.getUserById);

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
