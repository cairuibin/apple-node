import React from 'react';
import Routers from './rou/routerconfig'
import Routerview from './rou/routerview'

function RouterConfig(props) {
  const routes = props.routes ? props.routes : Routers;
  return (
    
       <Routerview {...props} routers={routes}/>
     
  );
}

export default RouterConfig;
