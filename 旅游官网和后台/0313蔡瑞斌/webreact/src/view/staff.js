import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { Card, Form, Input, Button, Modal, Select } from 'antd';
export default props => {

  const { httpSuccess } = React.Meili;

  const [list, setList] = useState([]);
  const [ModalText, setModalText] = useState('您确定删除该职员吗？')
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [id, setId] = useState('')


  // const [ModalText, setModalText] = useState('您确定删除该职员吗？')
  const [visibleeditstaff, setVisibleeditstaff] = useState(false)
  const [confirmLoadingeditstaff, setConfirmLoadingeditstaff] = useState(false)
  const [ideditstaff, setIdeditstaff] = useState('')
  const [valuestafff,setValuestafff]=useState({})
  function showModal(value, a) {
    setVisible(true)
    setId(a.id) 
  };
  function showModaleditstaff(value, a) {
    setVisibleeditstaff(true)
    setValuestafff(a) 
    setIdeditstaff(a.id)
  };
  function handleOkeditstaff() {
    setModalText('正在删除，请稍后 ？')
    setConfirmLoadingeditstaff(true)
    console.log(valuestafff,ideditstaff);
    let {user,pwd,status,roleid} =valuestafff
    httpSuccess(['get', '/crm/staffedit',
    {id:ideditstaff,user,pwd,status,roleid}],
     data => setList(data))
    setTimeout(() => {
      setVisibleeditstaff(false)
      setConfirmLoadingeditstaff(false)
    }, 1000);
  };
  function handleOk() {
    setModalText('正在删除，请稍后 ？')
    setConfirmLoading(true)
    httpSuccess(['get', '/crm/staffdelete',{id}], data => setList(data))
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 1000);
  };
  
  function handleCanceleditstaff() {setVisibleeditstaff(false)};
  function handleCancel() { setVisible(false) };

  const columns = [
    {
      title: '#id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '操作',
      dataIndex: 'id',
      key: 'status',
      render: (value, a) => <div>
        <Button type="primary" onClick={() => showModal(value, a)} danger>删除 </Button>
            &emsp;
             <Button type='dashed' onClick={() => showModaleditstaff(value, a)}>编辑</Button></div>
    }
  ];
  useEffect(() => {
    httpSuccess(['get', '/crm/staff'], data => setList(data))
  }, [])
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const onFinish = values => {

  setValuestafff(values) 
   console.log(valuestafff);
   
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};
  return <div>
    <Table rowKey={i => i.id} dataSource={list} columns={columns} />
    <div>
      <Modal
        title=  {`当前操作人:${localStorage.user}` }
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{ModalText}</p>
      </Modal>
    </div>
    <div>
      <Modal
        title=  {`当前操作人:${localStorage.user}` }
        visible={visibleeditstaff}
        onOk={handleOkeditstaff}
        okText={"确认"}
        cancelText={"取消"}
        confirmLoading={confirmLoadingeditstaff}
        onCancel={handleCanceleditstaff}
      >
       <Card title="请 填 写 要 添 加 的 职 员 信 息 ---" extra={<a href="#">1222222</a>} style={{ width: '60%' }}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                       
                    >
                        <Form.Item
                            label="职员名称"
                            name="user"
                            rules={[{ required: true, message: '请输入职员名称!' }]}
                           
                        >
                            <Input  defaultValue={valuestafff.user  } />
                        </Form.Item>

                        <Form.Item
                            label="设置密码"
                            name="pwd"
                            rules={[{ required: true, message: '请设置职员密码' }]}
                        >
                            <Input.Password defaultValue={valuestafff.pwd  }/>
                        </Form.Item>
                        <Form.Item
                            label="添加状态"
                            name="status"
                            rules={[{ required: true, message: '请设置职员状态' }]}
                        >
                            <Select defaultValue={valuestafff.status  }>

                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>

                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="权限级别"
                            name="roleid"
                            rules={[{ required: true, message: '请设置职员权限级别' }]}
                        >
                            <Select defaultValue={valuestafff.roleid  }>
                                <Select.Option value="1"> 1 </Select.Option>
                                <Select.Option value="2"> 2 </Select.Option>
                                <Select.Option value="3"> 3 </Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                                提交
                             </Button>
                        </Form.Item>
                    </Form>
                </Card>
      </Modal>
    </div>
  </div>
}