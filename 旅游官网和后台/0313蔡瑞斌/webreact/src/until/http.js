import axios from 'axios'
let http = (method,url,data={}) => {
    let configData         = {};
    let type               = method==='get'?'params':'data'
        configData.method  = method;
        configData.url     = url;
        configData[type]   = data;
        configData.headers = {
            versions:'1.0.0',
            source:'crm'
        }
    return axios(configData).catch(err=>{
        if(err.response.status === 500) return alert('服务器错误')
        if(err.response.status === 404) return alert('接口不存在')
    })
}
//请求成功之后的处理逻辑

let httpSuccess = async (subArr,callback,error) =>{
    let subData = subArr.length>2?subArr[2]:{};
    let res = await http(subArr[0],subArr[1],subData);
    const {code,msg,data} = res.data;
    if(code === 0){
        if(!callback){
            alert(msg);
            return
        }
        callback(data,msg)
        return
    }
    if(!error){
        alert(msg);
        return
    }
    error(data)
}

export {http,httpSuccess}
