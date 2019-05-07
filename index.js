/* eslint-disable no-shadow */
require('dotenv').config();
const fastify = require('fastify')({
  logger: true,
});
const fastifySession = require('fastify-session');
const fastifyCookie = require('fastify-cookie');
const MongoStore = require('connect-mongodb-session')(fastifySession);
const WebSocket = require('ws');
const userControllers = require('./src/user/user.controllers');


const wss = new WebSocket.Server({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024,
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024, // Size (in bytes) below which messages
    // should not be compressed.
  }
});

wss.on('connection', userControllers.onUserConnect);

fastify.register(fastifyCookie);
console.log(process.env.DATABASE_NAME)
fastify.register(fastifySession, {
  secret: 'a secret with minimum length of 32 characters',
  store: new MongoStore({
    uri: process.env.DATABASE_URL,
    collection: 'sessions',
  }),
  cookie: {
    maxAge: 86400000, // 1 day
    secure: false,
    httpOnly: false,
  },
});


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
