import { Request, Response } from 'express';

export class AdminRoutes {
  public routes(app): void {
    /* GET /users */
    app.route('/users').get((req: Request, res: Response) => {
      res.status(200).send({ message: 'GET request to /users' });
    });

    /* POST /users */
    app.route('/users').post((req: Request, res: Response) => {
      res.status(200).send({ message: 'POST request to /users' });
    });

    /* PUT /users/:id */
    app.route('/users').put((req: Request, res: Response) => {
      res.status(200).send({ message: 'PUT request to /users' });
    });

    /* PATCH /users/:id */
    app.route('/users').patch((req: Request, res: Response) => {
      res.status(200).send({ message: 'PATCH request to /users' });
    });

    /* DELETE /users/:id */
    app.route('/users').delete((req: Request, res: Response) => {
      res.status(200).send({ message: 'DELETE request to /users' });
    });
  }
}
