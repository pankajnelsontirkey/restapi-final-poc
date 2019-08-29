import { model } from 'mongoose';
import { Request, Response } from 'express';

import { EmployeeSchema } from '../models/employeeModel';

const Employee = model('employees', EmployeeSchema);

export class EmployeeController {
  /* Add employee method */
  public addNewEmployee(req: Request, res: Response) {
    let newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }
}
