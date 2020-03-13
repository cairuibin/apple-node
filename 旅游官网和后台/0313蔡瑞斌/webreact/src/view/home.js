import React,{useState,useEffect} from 'react'
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;
const { SubMenu }    = Menu;

export default props => {

    const {httpSuccess} = React.Meili
    const [collapsed,setCollapsed] = useState(false);
    const [list,setList] = useState([]);

    useEffect(()=>{
      httpSuccess(['get','/crm/homemenu'],data => setList(data))
    },[])

    let loginOut = ()=> {
      localStorage.clear();
      httpSuccess(['get','/login/out'],(data,msg)=>{
        alert(msg)
        props.history.push('/login')
      })  
    }
    return <Layout style={{ minHeight: '100vh' }}>

            <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)}>
              <div className="home_work">工作台</div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              {
                list.map( (item,index)=>{
                  return <SubMenu key={['sub',index+1].join('')} title={<span>{item.class}</span>}>
                        {
                          item.sub.map(jtem=>{
                            return <Menu.Item key={jtem.key} 
                                onClick={()=>props.history.push(jtem.to)}>
                                  {jtem.title}
                          </Menu.Item> 
                          })  
                        } 
                  </SubMenu>
               })
              }
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                  <div className="user_message">欢迎 ：{localStorage.user} &emsp;<span onClick={()=>loginOut()}>退出</span></div>
              </Header>
              <Content style={{ margin: '15px' }}>
                  <React.Meili.RouterView routers={props.routers}/>
              </Content>
            </Layout>
        </Layout>
}



