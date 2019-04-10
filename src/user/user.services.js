const User = require('./user.model');

const findUsers = async () => {
  const users = await User.find();
  return users;
};

const findUserById = async (id) => {
  const user = await User.findOne({ id });
  return user;
};

const findUserByLogin = async (login) => {
  const user = await User.findOne({ login });
  return user;
};

const updateUser = async (id, user) => {
  await User.updateOne({ id }, user);
  return true;
};

const deleteUser = async (id) => {
  await User.deleteOne({ id });
  return true;
};

const createUser = async (user) => {
  await User.create(user);
  return true;
};

module.exports = {
  findUsers,
  updateUser,
  deleteUser,
  createUser,
  findUserById,
  findUserByLogin,
};
