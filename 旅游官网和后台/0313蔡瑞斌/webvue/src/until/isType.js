import Vue from 'vue';
const { $message } = Vue.prototype;


// let reg = {
//     user:/^[a-zA-Z]\w{5,}$/,
//     pwd:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{5,}$/,
//     email:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
//     num:/^[0-9]$/
// }

let reg = {
    user:/^[a-zA-Z]\w{5,}$/,
    pwd:/^[a-zA-Z]\w{5,}$/,
    email:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
    num:/^[0-9]$/
}

export function regType(arr,next){
    let tip = arr.filter(item=>!reg[item.type].test(item.value))
    if(tip.length>0) {
        $message.error(tip[0].name+'不合法');
        return false
    }
    next()
}
export function isNull(arr,next){

    let tip = arr.filter(item=> item.value === '' )

    if(tip.length>0) {
        $message.error(tip[0].name+'不能为空');  
        return false
    }
    next()
  }
export function dataJson(name,value,type){
    return {name,value,type}
}