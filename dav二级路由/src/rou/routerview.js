

import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

class RouterMap extends Component {
    render() {
        const { routers, history } = this.props;
        return <Router history={history}>
            <Switch>
                {
                    routers.map((item, index) => {
                        const children = item.children === undefined ? [] : item.children;
                        const Comp = item.component;
                        if (item.redirect) {
                            return <Redirect to={item.redirect} key={'default'} exact ></Redirect>;
                        }
                        return <Route key={item.name} path={item.path} component={() => {
                            return <Comp routes={children} history={history}></Comp>
                        }} />
                    })
                }

            </Switch>
        </Router>
    }
}

export default RouterMap;