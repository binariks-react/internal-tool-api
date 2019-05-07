const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  author: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  text: String,
});

const roomSchema = new mongoose.Schema({
  name: String,
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  messages: [messageSchema],
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});


const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
