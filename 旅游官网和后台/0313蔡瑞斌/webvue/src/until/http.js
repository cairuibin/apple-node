import axios from 'axios'
import Vue from 'vue';
const { $message } = Vue.prototype;

function http(method,url,data={}){
    let configData         = {};
    let type               = method==='get'?'params':'data'
        configData.method  = method;
        configData.url     = url;
        configData[type]   = data;
        configData.headers = {
            versions:'1.0.0',
            source:'web'
        }
    return axios(configData).catch(err=>{
        if(err.response.status === 500) return $message.error('服务器错误')
        if(err.response.status === 404) return $message.error('接口不存在')
    })
}

async function httpSuccess(subArr,callback,error){
    let subData = subArr.length>2?subArr[2]:{};
    
    let res = await http(subArr[0],subArr[1],subData);
    const {code,msg,data} = res.data;
    if(code === 0){
        if(!callback){
            $message.success(msg);
            return
        }
        callback(data,msg)
        return
    }
    if(!error){
        $message.error(msg);
        return
    }
    error(data)
}
export {httpSuccess,http}