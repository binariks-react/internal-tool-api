const schemas = require('./user.schemas');
const controllers = require('./user.controllers');

const userRoutes = [
  {
    method: 'GET',
    url: '/api/employees',
    schema: schemas.getUsersSchema,
    handler: controllers.getUsers,
  },
  {
    method: 'GET',
    url: '/api/employee/:id',
    schema: schemas.getUserSchema,
    handler: controllers.getUser,
  },
  {
    method: 'PUT',
    url: '/api/employee',
    schema: schemas.createUserSchema,
    handler: controllers.createUser,
  },
  {
    method: 'PATCH',
    url: '/api/employee/:id',
    schema: schemas.updateUserSchema,
    handler: controllers.updateUser,
  },
  {
    method: 'DELETE',
    url: '/api/employee/:id',
    schema: schemas.deleteUserSchema,
    handler: controllers.deleteUser,
  },
  {
    method: 'POST',
    url: '/api/user/signin',
    schema: schemas.signInSchema,
    handler: controllers.signIn,
  },
  {
    method: 'POST',
    url: '/api/user/register',
    schema: schemas.createUserSchema,
    handler: controllers.createUser,
  },
];

module.exports = userRoutes;
