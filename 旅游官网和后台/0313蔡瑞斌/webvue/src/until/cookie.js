
export function setCookie(key,value,day=7){
    let time = new Date();
    time.setTime(time.getTime()+day*24*60*60*1000)
    let expires ="expires="+time.toUTCString();
    document.cookie = key+'='+value+';'+expires+";path=/;"
}

export function getCookie(key){
    let searchName = key+"=";
    let decodeCookie = decodeURIComponent(document.cookie)
    let arr = decodeCookie.split(';');
    for(let i =0;i<arr.length;i++){
        while(arr[i].charAt(0)== " "){
            arr[i] = arr[i].substring(1)
        }
        if(arr[i].indexOf(searchName)!==-1){
            return arr[i].substring(searchName.length,arr[i].length)
        }
    }
    return null
}

export function clearCookie(key){
    document.cookie = key+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;"
}

