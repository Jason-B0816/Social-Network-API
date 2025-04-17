import { Schema, model, Types } from 'mongoose';


const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp: Date) => timestamp.toLocaleString(),
  },
}, {
  toJSON: {
    getters: true,
  },
  id: false,
});

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp: Date) => timestamp.toLocaleString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
}, {
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

thoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtsSchema);
export default Thought;

