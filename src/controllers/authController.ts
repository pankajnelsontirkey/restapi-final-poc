import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { model } from 'mongoose';

import { UserSchema } from '../models/userModel';

const SECRET = process.env.SECRET;
const USER = model('users', UserSchema);

export class AuthController {
  public async signup(req: Request, res: Response) {
    let newUser = new USER(req.body);
    try {
      let user = await newUser.save();
      if (!user) {
        res.send({ message: 'Could not sign up the user' });
      }
      res.status(200).send(user);
    } catch (e) {
      console.log('Error: ', e);
      res.send(e);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      let user = await USER.findById(req.body);
      if (!user) {
        console.log('User not found!');

        res.status(400).send({ message: 'User not found' });
      }
      let token = sign({ _id: user._id }, SECRET);
      res.send({ token });
    } catch (e) {
      console.log('Error', e);
      res.status(400).send(e);
    }
  }
}
