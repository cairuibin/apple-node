const sendMes   = require('./app/until/sendMes')

module.exports = app => {
    app.sendMes     = sendMes;
    app.presentTime = new Date().getTime();

}