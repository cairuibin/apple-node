const Service = require('egg').Service;

class ProductService extends Service {
  
  async list(){
    const { app } = this;
    return await app.mysql.select('product_list');
  }

}

module.exports = ProductService;