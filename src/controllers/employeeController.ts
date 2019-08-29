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

  /* GET all employees */
  public getEmployees(req: Request, res: Response) {
    Employee.find({}, (err, employees) => {
      if (err) {
        res.send(err);
      }
      res.json(employees);
    });
  }

  public getEmployeeById(req: Request, res: Response) {
    Employee.findById(req.params['id'], (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public updateEmployee(req: Request, res: Response) {
    Employee.findOneAndUpdate(
      { _id: req.params['id'] },
      req.body,
      { new: true },
      (err, updatedEmployee) => {
        if (err) {
          res.send(err);
        }
        res.json(updatedEmployee);
      }
    );
  }

  public deleteEmployee(req: Request, res: Response) {
    Employee.remove({ _id: req.params['id'] }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted contact.' });
    });
  }
}
