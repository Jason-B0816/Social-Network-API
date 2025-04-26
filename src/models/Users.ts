import { Schema, model, Types } from 'mongoose';
// Removed unused import for reaction schema

const usersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match a valid email address!'],
    },
    thoughts: [
      {
        type: Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual for friend count
usersSchema.virtual('friendCount').get(function () {
  return this.friends?.length;
});


const User = model('User', usersSchema);

export default User;
