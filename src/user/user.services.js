const User = require('./user.model');

const createUser = nickname => User.create({ nickname, rooms: [] });

const findUserByNickname = nickname => User.findOne({ nickname });

const findOrCreate = async (nickname) => {
  const user = await findUserByNickname(nickname);
  if (user) return user;
  return createUser(nickname);
};


const addRoom = (nickname, roomId) => User.updateOne({ nickname }, { $addToSet: { rooms: roomId } });

module.exports = {
  addRoom,
  findOrCreate,
  findUserByNickname,
};
