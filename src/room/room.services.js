const Room = require('./room.model');

const createRoom = ({ name, members }) => Room.create({ name, members });

const addMemberToRoom = (_id, memberId) => Room.updateOne({ _id }, { $addToSet: { members: memberId } });

const addMessageToRoom = (_id, author, message) =>
  Room.updateOne({ _id }, { $addToSet: { messages: { author, message } } });

module.exports = {
  createRoom,
  addMemberToRoom,
  addMessageToRoom,
};
