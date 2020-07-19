const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  streak: {
    type: Number,
    default: 0,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  last: {
    type: Number,
    default: null,
  },
  yest: {
    type: Number,
    default: null,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Task = mongoose.model('task', TaskSchema);
