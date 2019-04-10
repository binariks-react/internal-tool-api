const services = require('./candidate.services');

const getCandidates = async (request, reply) => {
  const candidates = await services.findCandidates();
  return candidates;
};

const getCandidate = async (request, reply) => {
  const { params } = request;
  const candidate = await services.findCandidate(params.id);
  return candidate;
};

const deleteCandidate = async (request, reply) => {
  const { params } = request;
  const result = await services.deleteCandidate(params.id);
  return result;
};

const updateCandidate = async (request, reply) => {
  const { body, params } = request;
  const result = await services.updateCandidate(params.id, body);
  return result;
};

const createCandidate = async (request, reply) => {
  const { body } = request;
  const result = await services.createCandidate(body);
  return result;
};

module.exports = {
  getCandidate,
  getCandidates,
  deleteCandidate,
  updateCandidate,
  createCandidate,
};
