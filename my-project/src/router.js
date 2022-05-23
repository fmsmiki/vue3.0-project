import Vue from 'vue'
// 配置路由信息
import Router from 'vue-router'
// 1. 定义 (路由) 组件。
// 首页
const index  = () => import('@/pages/index.vue');

Vue.use(Router)
// 2、定义路由并创建router实例
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            meta: {
                level: 0, // 路由层级
                title: '首页', // 页面标题
                keepAlive: false // 是否缓存
            }
        }
    ]
})
export default router