'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async list() {
    const { ctx,app } = this;
    //列表数据
    let data = await ctx.service.blog.list();

    //近期发布前五条
    let fiveData = data.sort((a,b)=>b.subTime-a.subTime)

    //可选标签(数组去重)
    let tags = data.map(item=>item.class);
        tags = Array.from(new Set(tags));

    ctx.body = app.sendMes(0,'',{list:data,tags,timeList:fiveData.slice(0,5)})
  }
  //模糊搜索
  async search(){
    const { ctx,app } = this;
    const {keyword,exact} = ctx.request.body;

    let data = await ctx.service.blog.list();

    if(exact === 'yes'){
        data = data.filter(item=>item.class === keyword)
    }else{
      data = data.filter(item=>item.text.indexOf(keyword)!==-1)
    }
    
    ctx.body = app.sendMes(0,'',data)
  }



}

module.exports = BlogController;