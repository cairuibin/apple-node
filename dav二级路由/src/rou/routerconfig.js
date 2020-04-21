import IndexPage from '../routes/IndexPage';
import Login from '../routes/login'
import Home from '../routes/home'

const routers = [
    {
        path: '/home',
        name: 'home',

        component: Home,
        children: [
            {
                path: '/home/index',
                name: 'index',
                component: IndexPage
            }, {
                path: "/home",
                redirect: '/home/index'
            }
        ]
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/',
        redirect: '/home'
    }]
export default routers
