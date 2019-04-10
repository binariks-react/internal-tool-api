const bcrypt = require('bcrypt');
const services = require('./user.services');

const getUsers = async (request, reply) => {
  const users = await services.findUsers();
  return users;
};

const getUser = async (request, reply) => {
  const { params } = request;
  const user = await services.findUserById(params.id);
  return user;
};

const deleteUser = async (request, reply) => {
  const { params } = request;
  const result = await services.deleteUser(params.id);
  return result;
};

const updateUser = async (request, reply) => {
  const { body, params } = request;
  const result = await services.updateUser(params.id, body);
  return result;
};

const createUser = async (request, reply) => {
  const user = request.body;
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  const result = await services.createUser(user);
  return result;
};

const signIn = async (request, reply) => {
  const { password, login } = request.body;
  const user = await services.findUserByLogin(login);
  const success = await bcrypt.compare(password, user.password);
  if (success) {
    request.session.userId = user._id;
    return {
      payload: true,
    };
  }
  reply.code(403);
  return {
    error: 'Forbidden',
    mesage: 'Wrong login or password',
  };
};

module.exports = {
  signIn,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  createUser,
};
