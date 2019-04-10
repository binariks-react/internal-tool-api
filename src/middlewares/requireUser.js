module.exports = (request, reply, next) => {
  if (!request.user) {
    reply
      .code(403)
      .send({
        error: 'Forbidden',
        mesage: 'Please log in to continue',
      });
  } else next();
};
