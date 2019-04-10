const Candidate = require('./candidate.model');

const findCandidates = async () => {
  const candidates = await Candidate.find();
  return candidates;
};

const findCandidate = async (id) => {
  const candidate = await Candidate.findOne({ id });
  return candidate;
};

const updateCandidate = async (id, candidate) => {
  await Candidate.updateOne({ id }, candidate);
  return true;
};

const deleteCandidate = async (id) => {
  await Candidate.deleteOne({ id });
  return true;
};

const createCandidate = async (candidate) => {
  await Candidate.create(candidate);
  return true;
};

module.exports = {
  findCandidate,
  findCandidates,
  updateCandidate,
  deleteCandidate,
  createCandidate,
};
