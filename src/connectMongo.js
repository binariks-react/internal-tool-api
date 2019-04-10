const fastifyPlugin = require('fastify-plugin');
const mongoose = require('mongoose');

const dbConnector = async function() {
  return await mongoose.connect(`${process.env.DATABASE_URL}${process.env.DATABASE_NAME}`, { useNewUrlParser: true });
};

module.exports = fastifyPlugin(dbConnector);
