import React,{useState,useEffect} from 'react'
import {Table,Tag, Button} from 'antd'
import { Modal} from 'antd';
export default props =>{

const [visible,setvisible]=useState(false)
const [id,setId]=useState('')
  function showModal (value){
    setvisible(true)
    setId(value)
  };

  function handleOk(e) {
    httpSuccess(['put','/crm/userblack',{id}],data => setList(data))
    setvisible(false)
  };

  function handleCancel (e) {
    setvisible(false)
  };

    const {httpSuccess} = React.Meili;

    const [list,setList] = useState([]);
    const columns = [
        {
          title: '姓名',
          dataIndex: 'user',
          key: 'user',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title:'操作',
            dataIndex:'id',
            key:'id',
            render: value => <Button type='danger' onClick={()=>showModal(value)}>加入黑名单</Button>            
        }
    ];

    useEffect(()=>{
      httpSuccess(['get','/crm/userlist'],data => setList(data))
    },[])

    return <div>
            <Table rowKey={i=>i.id} dataSource={list} columns={columns} />
            <div>
        <Modal
          title={`当前操作人：${localStorage.user}`}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
        <h3>您确认将此用户加入黑名单吗？</h3>
        </Modal>
      </div>
    </div>
}