'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {//分页
    const { ctx } = this;
    let data = await ctx.service.index.find(ctx.request.body);
    ctx.body = data;
  }
  async add() {//添加
    const { ctx } = this;
    let data = await ctx.service.index.adddata(ctx.request.body);
    ctx.body = data;
  }
  async dele() {//删除
    const { ctx } = this;
    let data = await ctx.service.index.deledata(ctx.request.body);
    ctx.body = data;
  }
  async edit() {//编辑
    const { ctx } = this;
    let data = await ctx.service.index.editdata(ctx.request.body);
    ctx.body = data;
  }
}

module.exports = HomeController;
