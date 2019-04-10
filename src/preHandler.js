const userServices = require('./user/user.services');

module.exports = async (request, reply, next) => {
  const session = request.session;
  if (session.userId) {
    const user = await userServices.findUserById(session.userId);
    request.user = user;
  }
  return;
};
