import dva from 'dva';
import './index.css';
import route from './router'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router


app.router(route);

// 5. Start
app.start('#root');
