import React,{useState,useEffect} from 'react'
import {Table,Tag} from 'antd'
export default props =>{
   
    const {httpSuccess} = React.Meili;

    const [list,setList] = useState([]);
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
          },
        {
          title: '日',
          dataIndex: 'day',
          key: 'day',
        },
        {
          title: '晚',
          dataIndex: 'night',
          key: 'night',
        },
        {
          title: '价格',
          dataIndex: 'pay',
          key: 'pay',
        },{
          title: '游记',
          dataIndex: 'text',
          key: 'text',
        },
        {
            title:'操作',
            dataIndex:'id',
            key:'status',
            render: value => <Tag >删除游记</Tag>            
        }
    ];
    useEffect(()=>{
      httpSuccess(['get','/crm/blog'],data => setList(data))
    },[])

    return <div>
            <Table rowKey={i=>i.id} dataSource={list} columns={columns} />;
    </div>
}