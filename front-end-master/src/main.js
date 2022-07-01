import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
// 全屏滚动 vue-fullpage.js
import 'fullpage.js/vendors/scrolloverflow';
import VueFullpage from 'vue-fullpage.js'
Vue.use(VueFullpage)
//动画库
import animate from 'animate.css'
Vue.use(animate)

//引入全局axios
import axios from 'axios'
Vue.prototype.$http = axios 

//element UI
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
import './plugins/element'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
