export default function transTimer(time){
    let str = JSON.stringify(new Date(JSON.parse(time)))
    return str.slice(1,11)
}