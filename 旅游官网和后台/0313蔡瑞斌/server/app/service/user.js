const Service = require('egg').Service;

class UserService extends Service {
  async find(user) {
    const { app } = this
    return await app.mysql.select('user',{where:{user}});
  }
  async list(){
    const { app } = this
    return await app.mysql.select('user',{where:{status:'1'}});
  }
  async update(id){
    const { app } = this
    return await app.mysql.update('user',{id,status:'2'});
  }
  async insert(user,pwd,email,age){
    const { app } = this;
    return await app.mysql.insert('user',{id:null,user,pwd,email,age});
  }
}

module.exports = UserService;