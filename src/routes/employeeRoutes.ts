import { Request, Response } from 'express';

import { EmployeeController } from '../controllers/employeeController';

export class UserRoutes {
  public employeeController: EmployeeController = new EmployeeController();

  public routes(app): void {
    /* GET /employees */
    app.route('/employees').get(
      this.employeeController.getEmployees
      /* (req: Request, res: Response) => {
      res.status(200).send({ message: 'GET request to /employees' });
    } */
    );

    /* POST /employees */
    app.route('/employees').post(
      this.employeeController.addNewEmployee
      /* (req: Request, res: Response) => { res.status(200).send({ message: 'POST request to /employees' });} */
    );

    /* GET employee by _id */
    app.route('/employees/:id').get(this.employeeController.getEmployeeById);

    /* PUT /employees/:id */
    app.route('/employees/:id').put(
      this.employeeController.updateEmployee
      /* (req: Request, res: Response) => {
      res.status(200).send({ message: 'PUT request to /employees' });
    } */
    );

    // /* PATCH /employees/:id */
    // app.route('/employees/:id').put((req: Request, res: Response) => {
    //   res.status(200).send({ message: 'PUT request to /employees' });
    // });

    /* DELETE /employees/:id */
    app.route('/employees/:id').delete(
      this.employeeController.deleteEmployee
      /* (req: Request, res: Response) => {
      res.status(200).send({ message: 'DELETE request to /employees/:id' });
    } */
    );
  }
}
