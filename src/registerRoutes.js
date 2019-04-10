const userRoutes = require('./user/user.routes');
const candidateRoutes = require('./candidate/candidate.routes');


module.exports = (fastify) => {
  userRoutes.forEach(route => fastify.route(route));
  candidateRoutes.forEach(route => fastify.route(route));
};
