import { Schema } from 'mongoose';
import { hash as BcryptHash, compare as BcryptCompare } from 'bcrypt';

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  /* Store hashed passwords only */
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', async function(next) {
  const user = this;

  const hashedPassword = await BcryptHash(user['password'], 10);
  this['password'] = hashedPassword;
  next();
});

UserSchema.methods['verifyPassword'] = async function(password) {
  const user = this;
  const result = await BcryptCompare(password, user.password);
  return result;
};
