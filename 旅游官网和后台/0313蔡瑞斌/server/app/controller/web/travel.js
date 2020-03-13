'use strict';

const Controller = require('egg').Controller;

class TravelController extends Controller {
  // 官网的首页旅游意向调查数据提交接口
  async submit() {
    const { ctx,app} = this;
    const {name,mouth,person,place} = ctx.request.body;
      // console.log(name,mouth,person,place,'sdddddddd');
      
    // 要插入数据库的数据
    let subObj = {
      name,
      mouth,
      person,
      place,
      userid:ctx.info.id,
      time:app.presentTime
    }

    // 插入后的结果返回
    let purRes    = await ctx.service.purpose.insert(subObj);
    let isSuccess = purRes.affectedRows === 1;
    ctx.body      = app.sendMes(isSuccess?0:1,isSuccess?'提交成功':'提交失败')
  }

  // 旅游意向调查的option内容返回
  async list(){
    const { ctx,app } = this;
    let data = {
        person:[2,3,4,5,6,7,8,9],
        place:['巴黎','曼谷','大理','旧金山','加勒比海'],
        mouth:[4,5,6,7,8]
    }
    ctx.body = app.sendMes(0,'请求成功',data)
  }
}

module.exports = TravelController;
