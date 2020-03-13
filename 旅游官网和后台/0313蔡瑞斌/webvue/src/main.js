import Vue     from 'vue'
import App     from './App.vue'
import router  from './router'
import store   from './store'
import md5     from 'md5'
import             '@/public/ele.js'
import transTimer from '@/until/transTime'
import {http,httpSuccess} from '@/until/http'
import {regType,isNull,dataJson} from '@/until/isType'
import {setCookie,getCookie,clearCookie} from '@/until/cookie'

Vue.prototype.$http        = http;
Vue.prototype.$httpSuccess = httpSuccess;
Vue.prototype.$md5         = md5;
Vue.prototype.setCookie    = setCookie;
Vue.prototype.getCookie    = getCookie;
Vue.prototype.clearCookie  = clearCookie;
Vue.prototype.$regType     = regType;
Vue.prototype.$isNull      = isNull;
Vue.prototype.dataJson     = dataJson;
Vue.prototype.$transTimer  = transTimer 
Vue.config.productionTip   = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
