'use strict';

const Controller = require('egg').Controller;
const jwt        = require('jsonwebtoken');
class LoginController extends Controller {
  async index() {
    const { ctx ,app} = this;
    const { user,pwd} = ctx.request.body;
    //验证用户是否存在
    let userRes = await ctx.service.user.find(user)
        
    if(userRes.length === 0){
      ctx.body = app.sendMes(1,'用户不存在');
      return
    }
    //验证密码是否正确
    if(userRes[0].pwd!==pwd){
      ctx.body = app.sendMes(1,'密码错误');
      return
    }
    //生成token
    let obj   = {...userRes[0],signTime:new Date().getTime()}
    let webToken = jwt.sign(obj,'web');

    //cookie 存token
    ctx.cookies.set('webToken',webToken);
    
    ctx.body = app.sendMes(0,'登录成功');
  }
}

module.exports = LoginController;
