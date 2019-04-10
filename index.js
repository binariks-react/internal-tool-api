require('dotenv').config();
const fastify = require('fastify')({
  logger: true,
});
const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');
const MongoStore = require('connect-mongodb-session')(fastifySession);
const registerRoutes = require('./src/registerRoutes');
const preHandler = require('./src/preHandler');

registerRoutes(fastify);

fastify.register(fastifyCookie);
fastify.register(fastifySession, {
  secret: 'a secret with minimum length of 32 characters',
  store: new MongoStore({
    uri: process.env.DATABASE_URL,
    databaseName: process.env.DATABASE_NAME,
    collection: 'sessions',
  }),
  cookie: {
    maxAge: 86400000, // 1 day
    secure: false,
    httpOnly: false,
  },
});

fastify.addHook('onRequest', preHandler);

fastify.register(require('./src/connectMongo'));

fastify.setErrorHandler((error, request, reply) => {
  console.error(error);
  reply.send({
    statusCode: 500,
    error: 'Internal Server Error',
    message: error.message,
  });
});

fastify.listen(3000, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
