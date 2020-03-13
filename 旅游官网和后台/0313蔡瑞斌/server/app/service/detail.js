const Service = require('egg').Service;

class DetailService extends Service {
  
  async list(id){
    const { app } = this;
    return await app.mysql.select('product_detail',{where:{product_id:id}});
  }
}

module.exports = DetailService;