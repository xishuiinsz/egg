'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/auth/code', controller.auth.getCode)
  router.post('/auth/login', controller.auth.login)
};
