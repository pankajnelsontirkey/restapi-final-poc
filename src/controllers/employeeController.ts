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

  /* Fetch all employees */
  public getEmployees(req: Request, res: Response) {
    Employee.find({}, (err, employees) => {
      if (err) {
        res.send(err);
      }
      res.json(employees);
    });
  }

  /* Fetch employee by id */
  public getEmployeeById(req: Request, res: Response) {
    Employee.findById(req.params['id'], (err, employeeById) => {
      if (err) {
        res.send(err);
      }
      res.json(employeeById);
    });
  }

  /* Update employee */
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

  /** Delete employee
   * NOT MENTIONED IN REQUIREMENTS!
   */
  /* public deleteEmployee(req: Request, res: Response) {
    Employee.findOneAndDelete({ _id: req.params['id'] }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted employee!' });
    });
  } */
}
