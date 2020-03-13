'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx ,app} = this;
    let data = await ctx.service.user.list();
    ctx.body = app.sendMes(0,'',data)
  }
  async black() {
    const { ctx ,app} = this;
    const {id} = ctx.request.body
    let res = await ctx.service.user.update(id);
    if(res.affectedRows === 1){
        let data = await ctx.service.user.list();
        ctx.body = app.sendMes(0,'更新成功',data)
    }
    
  }
}

module.exports = UserController;