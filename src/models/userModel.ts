import { Schema } from 'mongoose';

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
  passwrod: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});
