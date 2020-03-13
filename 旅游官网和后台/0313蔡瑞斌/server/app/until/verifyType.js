const jwt = require('jsonwebtoken')
module.exports = (token,key) =>{
    return new Promise(res=>{
            jwt.verify(token,key,(error,results)=>{
                if(error){
                    throw error
                    return 
                }
                res(results)
            })
    })
}