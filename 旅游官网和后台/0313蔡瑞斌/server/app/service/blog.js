const Service = require('egg').Service;

class BlogService extends Service {
  
  async list(){
    const { app } = this;
    return await app.mysql.select('blog');
  }
}

module.exports = BlogService;