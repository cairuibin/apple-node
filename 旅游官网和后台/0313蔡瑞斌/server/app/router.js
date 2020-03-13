'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.web.login.index);
  router.get('/travel/list', controller.web.travel.list);
  router.post('/travel/submit', controller.web.travel.submit);
  router.get('/product/list', controller.web.product.list);
  router.post('/product/serach', controller.web.product.search);
  router.post('/product/detail',controller.web.product.detail);
  router.get('/blog/list', controller.web.blog.list);
  router.post('/blog/search', controller.web.blog.search);
  router.post('/crm/login', controller.crm.login.index);
  router.get('/crm/homemenu', controller.crm.home.menu);
  router.get('/crm/purpose', controller.crm.purpose.index);
  router.get('/crm/userlist', controller.crm.user.index);
  router.put('/crm/userblack', controller.crm.user.black);
  router.get('/crm/staff', controller.crm.staff.index);
  router.get('/crm/blog', controller.crm.blog.index);
  router.post('/crm/staffadd', controller.crm.staff.staffadd);
  router.get('/crm/staffdelete', controller.crm.staff.staffdelete);
  router.get('/crm/staffedit', controller.crm.staff.staffedit);
};
