const requireUser = require('../middlewares/requireUser');
const schemas = require('./candidate.schemas');
const controllers = require('./candidate.controllers');

const candidateRoutes = [
  {
    method: 'GET',
    url: '/api/candidates',
    schema: schemas.getCandidatesSchema,
    preHandler: [requireUser],
    handler: controllers.getCandidates,
  },
  {
    method: 'GET',
    url: '/api/candidate/:id',
    schema: schemas.getCandidateSchema,
    handler: controllers.getCandidate,
  },
  {
    method: 'PUT',
    url: '/api/candidate',
    schema: schemas.createCandidateSchema,
    handler: controllers.createCandidate,
  },
  {
    method: 'PATCH',
    url: '/api/candidate/:id',
    schema: schemas.updateCandidateSchema,
    handler: controllers.updateCandidate,
  },
  {
    method: 'DELETE',
    url: '/api/candidate/:id',
    schema: schemas.deleteCandidateSchema,
    handler: controllers.deleteCandidate,
  },
];

module.exports = candidateRoutes;
