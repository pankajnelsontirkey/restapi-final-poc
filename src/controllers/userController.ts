import { model } from 'mongoose';
import { Request, Response } from 'express';

import { UserSchema } from '../models/userModel';

const User = model('users', UserSchema);

export class UserController {
  /* Add user */
  public addNewUser(req: Request, res: Response) {
    let newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  /* Fetch all users */
  public getUsers(req: Request, res: Response) {
    User.find({}, (err, users) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(users);
    });
  }

  /* Fetch user by id */
  public getUserById(req: Request, res: Response) {
    User.findById(req.params['id'], (err, userById) => {
      if (err) {
        res.send(err);
      }
      res.json(userById);
    });
  }

  /** Update user
   * NOT MENTIONED IN REQUIREMENTS!
   */
  /* public updateUser(req: Request, res: Response) {
    User.findOneAndUpdate(
      { _id: req.body.params['id'] },
      req.body,
      {
        new: true
      },
      (err, updatedUser) => {
        if (err) {
          res.send(err);
        }
        res.json(updatedUser);
      }
    );
  } */

  /** Delete User
   * NOT MENTIONED IN REQUIREMENTS!
   */
  /* public deleteUser(req: Request, res: Response) {
    User.findOneAndDelete({ _id: req.param['id'] }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted user!' });
    });
  } */
}
