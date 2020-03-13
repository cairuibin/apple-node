const url = require('url')
const verfyType = require('../until/verifyType')
module.exports = options =>{
    return async (ctx,next)=> {  
        let source = ctx.get('source')
        if(options.includes(url.parse(ctx.url).pathname)){
            await next()
            return 
        }
        const token = ctx.cookies.get(source+'Token');

        if(!token){
            ctx.body = ctx.app.sendMes(1,'没有权限，请登录')
            return
        }
        if(url.parse(ctx.url).pathname == '/login/out'){
            
            ctx.cookies.set(source+'Token',null)
            ctx.body = ctx.app.sendMes(0,'您已退出登录状态')
            return 
        }
       
        let info
        try{
            info = await verfyType(token,source)
        }
        catch(error){
            ctx.body = ctx.app.sendMes(1,'权限无效，请登录')
            return
        }

        let {signTime} = info;
        let nowTime = new Date().getTime();
        let time = (nowTime-signTime)/1000/60/60;
        if( time>=4){
            ctx.body = ctx.app.sendMes(1,'登录超时，请重新登录')
            return
        }

        
        ctx.info = info;
        await next()
    }
}