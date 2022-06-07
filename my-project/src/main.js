import Vue from 'vue'
import App from './App.vue'
import router from './router';// 引入路由配置页面
// 全局引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 用下载的自定义样式文件
//import './assets/theme-style/index.css';

// 在项目中改变 SCSS 变量
//import './assets/css/element-variables.scss';

// 引入元素初始化样式
import './assets/css/reset.scss';

// 
import 'github-markdown-css/github-markdown.css';

Vue.config.productionTip = false

// 全局注册
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
