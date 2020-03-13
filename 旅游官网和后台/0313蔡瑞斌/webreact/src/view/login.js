import React,{useState} from 'react'
import { Input, Button } from 'antd';
let submit = (user,pwd,push) => {
    const { httpSuccess,isNull,regType,dataJson } = React.Meili;

    let checkArr = [dataJson('账号',user,'user'),dataJson('密码',pwd,'pwd')];
    
    isNull(checkArr,()=>regType(checkArr,()=>httpSuccess(['post','/crm/login',{user,pwd}],(data,msg)=>{

        alert(msg)

        localStorage.setItem('user',user)
  
        push('/home')
    })))  
}

export default props => {
    
    const [user,setUser] = useState('');
    const [pwd,setPwd]   = useState('');
 
    return (
        <div className="login_out">
            <Input placeholder="请输入账号" value={user} onChange={ e =>setUser(e.target.value)} />
            <Input.Password  placeholder="请输入密码" value={pwd} onChange={ e =>setPwd(e.target.value)}/>
            <Button block onClick={()=>submit(user,pwd,props.history.push)}>提交</Button>
        </div>
        )
}




