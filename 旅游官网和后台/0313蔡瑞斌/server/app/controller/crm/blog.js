const Controller = require('egg').Controller;

class  StaffController extends Controller {
  async index() {
    const { ctx, app,service } = this;
    let data = await ctx.service.blog.list();
    ctx.body = app.sendMes(0,'',data)
  }
}

module.exports =  StaffController;