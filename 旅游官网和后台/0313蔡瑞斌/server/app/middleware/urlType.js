
const url = require('url')

module.exports = option =>{
    return async (ctx,next) =>{
        console.log(ctx.path);
        
        if(url.parse(ctx.url).pathname === '/crm/login'
        ||url.parse(ctx.url).pathname === '/travel/list'||
        url.parse(ctx.url).pathname === '/login'||
        url.parse(ctx.url).pathname === '/travel/submit'
        || url.parse(ctx.url).pathname === '/product/list'
        || url.parse(ctx.url).pathname ===  "/blog/list"
        || url.parse(ctx.url).pathname ==="/blog/search"
        ){
            await next()
            return 
        }
        let roleid    = ctx.info.roleid;
        let arr       = await ctx.service.roleMenu.find(roleid);
        let urlcookie = arr.map(item => item.menu).map(jtem=>option[jtem].to)
        ctx.cookies.set(urlcookie,urlcookie) 
        await next()

    }
}