import { model } from 'mongoose';
import { Request, Response } from 'express';

import { UserSchema } from '../models/userModel';
var jwt = require('jsonwebtoken');

const secret = 'jhasgdhjagsdhagsdhags';

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
    console.log('LoggedInUser ', req.headers['loggedInUser']);
    User.findById(req.headers['loggedInUser'], (err, userById) => {
      if (err) {
        res.send(err);
      }
      res.json(userById);
    });
  }

  /** TODO!!!
   *  Fetch user by id */
  /* public async login(req: Request, res: Response) {
    try {
      let user = await User.findOne(req.body);
      if (!user) {
        console.log('User not found');

        res.status(400).send({ message: 'User not found' });
      }
      let token = jwt.sign({ _id: user._id }, secret);
      res.send({ token });
    } catch (e) {
      console.log(e);

      res.status(400).send(e);
    }
  } */

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
