import Vue from 'vue'
import App from './App.vue'
import router from './router';// 引入路由配置页面
// 全局引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 全局注册
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
