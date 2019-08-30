import { EmployeeController } from '../controllers/employeeController';

export class EmployeeRoutes {
  public employeeController: EmployeeController = new EmployeeController();

  public routes(app): void {
    /* Add new employee */
    app.route('/employees').post(this.employeeController.addNewEmployee);

    /* Get all employees */
    app.route('/employees').get(this.employeeController.getEmployees);

    /* Get employee by _id */
    app.route('/employees/:id').get(this.employeeController.getEmployeeById);

    /* Update employee */
    app.route('/employees/:id').put(this.employeeController.updateEmployee);

    /** DELETE /employees/:id
     * NOT MENTIONED IN REQUIREMENTS!
     */
    /* app.route('/employees/:id').delete(this.employeeController.deleteEmployee); */
  }
}
