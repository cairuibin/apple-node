'use strict';

const Controller = require('egg').Controller;

class PurposeController extends Controller {
  async index() {
    const { ctx ,app} = this;
    let data = await ctx.service.purpose.list();
    ctx.body = app.sendMes(0,'',data)
  }
}

module.exports = PurposeController;