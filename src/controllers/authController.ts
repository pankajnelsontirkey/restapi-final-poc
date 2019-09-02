import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

import { UserSchema } from '../models/userModel';
import { model } from 'mongoose';

const SECRET = process.env.SECRET;
const User = model('users', UserSchema);

export class AuthController {
  public async login(req: Request, res: Response) {
    try {
      let user = await User.findById(req.body);
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
