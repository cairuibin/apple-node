'use strict';

const Controller = require('egg').Controller;

class CrmHomeController extends Controller {
  async menu() {
    const { ctx,app} = this;

    let roleid     = ctx.info.roleid;
    let searchRole = await ctx.service.roleMenu.find(roleid);
    
    let menuData   = app.config.urlType;
    let data       = []

    searchRole.map(item=>item.menu).map( item => {
 
      let sonObj = {
        title:menuData[item].title,
        to:menuData[item].to,
        key:item
      }


      let index = data.findIndex(j=>j.class === menuData[item].class)

      if(index!==-1){
        data[index].sub.push(sonObj)
        return 
      }
  
      data.push({class:menuData[item].class,sub:[sonObj]})
    })

    ctx.body = app.sendMes(0,'请求成功',data)
  }
}

module.exports = CrmHomeController;
