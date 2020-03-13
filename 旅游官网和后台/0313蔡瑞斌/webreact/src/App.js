import React           from 'react';
import {BrowserRouter} from 'react-router-dom';
import RouterConfig    from './router/router.config'
import  './App.css';

export default props => <div>
    <BrowserRouter>
        <React.Meili.RouterView routers={RouterConfig}/>
    </BrowserRouter> 
</div>
