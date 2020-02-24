const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    dueDate: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false
    },
    priority: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
