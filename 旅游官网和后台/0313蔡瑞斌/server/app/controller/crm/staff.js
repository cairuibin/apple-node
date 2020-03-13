const Controller = require('egg').Controller;

class  StaffController extends Controller {
  async index() {
    const { ctx, app,service } = this;
    let data = await ctx.service.staff.index();
    ctx.body = app.sendMes(0,'',data)
  }
  async staffadd(){
    const { ctx, app,service } = this;
    let obj=ctx.request.body

    
    let data = await ctx.service.staff.staffadd(obj);
    ctx.body = app.sendMes(0,'',data)
  }
  async staffdelete(){
    const { ctx, app,service } = this;
    let {id}=ctx.query
    
    
    let data = await ctx.service.staff.staffdelete(id);
    ctx.body = app.sendMes(0,'',data)
  }
  async staffedit(){
    const { ctx, app,service } = this;
    let {id,user,pwd,status,roleid}=ctx.query
    
    
    let data = await ctx.service.staff.staffedit(id,user,pwd,status,roleid);
    ctx.body = app.sendMes(0,'',data)
  }
}

module.exports =  StaffController;