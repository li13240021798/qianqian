import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    //配置resource路由
import VueResource from 'vue-resource'

//安装vueResource
Vue.use(VueResource)
    //配置全局路由，请求根路径，放到Vue.use(VueResource)之后，
Vue.http.options.root = 'http://vue.studyit.io'

//全局配置post提交时的表单数据类型（application/x-www-form-urlencoded）
Vue.http.options.emulateJSON = true

import './filters.js'


import app from './App.vue'




//导入路由对象
import router from './router.js'

import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
// 轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//顶部
Vue.component(Header.name, Header)
    //评论按钮
Vue.component(Button.name, Button)



import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css' //引入mui中的扩展的购物车的css文件

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router

})