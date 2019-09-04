import * as passport from 'passport';
import { model } from 'mongoose';
import { Strategy } from 'passport-local';

import { UserSchema } from '../models/userModel';

const AuthHandler = new passport.Authenticator();
const UserModel = model('users', UserSchema);

AuthHandler.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.create({ email, password });
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

AuthHandler.use(
  'login',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'User not found!' });
        }
        // const validate = await user.verifyPassword(password);
      } catch (error) {
        done(error);
      }
    }
  )
);
