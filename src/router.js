import VueRouter from 'vue-router'


//导入组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/news/newlist.vue'
import newsinfo from './components/news/newsinfo.vue'


var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/newslist', component: newlist },
        { path: '/home/newsinfo/:id', component: newsinfo }

    ],
    linkActiveClass: 'mui-active'
})


export default router