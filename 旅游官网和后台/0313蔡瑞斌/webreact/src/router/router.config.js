import React from 'react'
import Home  from '@/view/home'
import Login from '@/view/login'
import Amazing from '@/view/amazing'
import Hight from '@/until/loginType'
import User from '@/view/user'
import Staff from '../view/staff'
import Blog from '../view/blog'

import Staffadd from '../view/staffadd'
const routerConfig = [
    {
        path:'/home',
        component:Hight(Home),
        children:[
            {
                path:'/home/staff',
                component:Hight(Staff)
            },
            {
                path:'/home/staffadd',
                component:Hight(Staffadd)
            },
            {
                path:'/home/user',
                component:Hight(User)
            },
            {
                path:'/home/amzinglist',
                component:Hight(Amazing)
            },
            {
                path:'/home/contact',
                component:()=><div>联系我们</div>
            },
            {
                path:'/home/rolelist',
                component:()=><div>角色列表</div>
            },
            {
                path:'/home/roleadd',
                component:()=><div>添加角色</div>
            },
            {
                path:'/home/productlist',
                component:()=><div>产品列表</div>
            },
            {
                path:'/home/productadd',
                component:()=><div>添加产品</div>
            },
            {
                path:'/home/booklist',
                component:Hight(Blog)
            }, 
            {
                path:'/home/bookadd',
                component:()=><div>添加游记</div>
            }   
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        to:'/login',
        from:'/'
    }
]
export default routerConfig