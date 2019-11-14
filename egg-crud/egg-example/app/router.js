'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/list', controller.home.index);//分页接口
  router.post('/add', controller.home.add);//添加接口
  router.post('/dele', controller.home.dele);//删除接口
  router.post('/edit', controller.home.edit);//编辑接口
};
