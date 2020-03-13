import React, { Component } from 'react'
import { Card, Form, Input, Button, Modal, Select } from 'antd';

export default class Staffadd extends Component {
   

    state = {
        ModalText: '请确认权限和状态 ！',
        visible: false,
        confirmLoading: false,
        values:{}
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        const {httpSuccess} = React.Meili;
        console.log(this.state.values);
        let {pwd,user,status,roleid}=this.state.values
        httpSuccess(['post','/crm/staffadd',{pwd,user,status,roleid}],data => {
            this.setState({
                ModalText: '您已成功添加该用户 。。。',
                confirmLoading: true,
            });
            setTimeout(() => {
                this.setState({
                    visible: false,
                    confirmLoading: false,
                });
            }, 1000);
        })
       
    };
    handleCancel = () => {

        this.fromvalues.resetFields()
        this.setState({
            visible: false,
        });
    };
    render() {
      
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };


        const onFinish = values => {
           
            this.showModal()
            this.setState({
                values:values
            })
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        const { visible, confirmLoading, ModalText } = this.state;

        return (
            <div>
                <Card title="请 填 写 要 添 加 的 职 员 信 息 ..." extra={<a href="#"></a>} style={{ width: '60%' }}>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        ref={(el)=>this.fromvalues=el}
                    >
                        <Form.Item
                            label="职员名称"
                            name="user"
                            rules={[{ required: true, message: '请输入职员名称!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="设置密码"
                            name="pwd"
                            rules={[{ required: true, message: '请设置职员密码' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="添加状态"
                            name="status"
                            rules={[{ required: true, message: '请设置职员状态' }]}
                        >
                            <Select>

                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>

                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="权限级别"
                            name="roleid"
                            rules={[{ required: true, message: '请设置职员权限级别' }]}
                        >
                            <Select>
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
                <div>
               
                    <Modal
                        title={"当前操作者:"+localStorage.user}
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <p>{ModalText}</p>
                    </Modal>
                </div>
            </div>
        )
    }
}
