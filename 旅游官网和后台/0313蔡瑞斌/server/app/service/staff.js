const Service = require('egg').Service;

class StaffUserService extends Service {
  async find(user) {
    const { app } = this
    return await app.mysql.select('staff', { where: { user } });
  }
  async index() {
    const { app } = this
    return await app.mysql.select('staff', { where: { status: 1 } });
  }
  async staffadd(obj) {
    const { app } = this
    return await app.mysql.insert('staff', { id: null, ...obj });
  }
  async staffdelete(id) {
    const { app } = this

    await this.app.mysql.update('staff', { id, status: 2 });
    return await app.mysql.select('staff', { where: { status: 1 } });

  }
  async staffedit(id, user, pwd, status, roleid) {
    const { app } = this
    await this.app.mysql.update('staff', { id, user, pwd, status, roleid });
    return await app.mysql.select('staff', { where: { status: 1 } });
  }
}

module.exports = StaffUserService;