import React, { Component } from 'react'
import Routerview from '../rou/routerview'
export default class Home extends Component {
    render() {
        let {routes,history}=this.props
        return (

            <div>
              home一级
            <div>
            <Routerview routers={routes} history={history} />
            </div>
            </div>
        )
    }
}
