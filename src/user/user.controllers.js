const services = require('./user.services');

const onUserConnect = (ws) => {
  console.log('connection');
  ws.on('message', () => {
    console.log('message');
  });
};

module.exports = {
  onUserConnect,
};
