import React,{useState,useEffect} from 'react'
import {Table} from 'antd'
export default props =>{
    console.log(props)
    const {httpSuccess} = React.Meili;

    const [list,setList] = useState([]);
    const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '出行人数',
          dataIndex: 'person',
          key: 'age',
        },
        {
          title: '目的地',
          dataIndex: 'place',
          key: 'place',
        },
    ];
    useEffect(()=>{
      httpSuccess(['get','/crm/purpose'],data => setList(data))
    },[])
    return <div>
            <Table rowKey={i=>i.id} dataSource={list} columns={columns} />;
    </div>
}