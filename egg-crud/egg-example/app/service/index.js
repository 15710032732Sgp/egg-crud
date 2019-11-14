const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    let offsets = (uid.offset * 1 - 1) * 3
    const results = await this.app.mysql.select('list', { // 搜索 post 表
      limit: 3, // 返回数据量
      offset: offsets, // 数据偏移量
    })
    return results;
  }
  async adddata(uid) {//增加
    const results = await this.app.mysql.insert('list', { name: uid.names, title: uid.title, zuozhe: uid.zuozhe });
    return results;
  }
  async deledata(uid) {//删除
    const result = await this.app.mysql.delete('list', {
      id: uid.id,
    })
    return result;
  }
  async editdata(uid) {//编辑
    console.log(uid, "uid")
    const row = {
      id: uid.id,
      name: uid.namess,
      title: uid.title,
      zuozhe: uid.zuozhe,

    }
    const result = await this.app.mysql.update('list',row)
    return result;
  }
}

module.exports = UserService;