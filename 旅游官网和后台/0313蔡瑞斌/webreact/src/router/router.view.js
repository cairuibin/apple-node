import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

export default props => (
    <Switch>
        {
            props.routers.map((item,key)=>{
                if(!item.path) return <Redirect from={item.from} to={item.to} key={key}/>
                return <Route path={item.path} render={ mes=> <item.component {...mes} routers={item.children}/>} key={key}/>
            })
        }
    </Switch>
    )

