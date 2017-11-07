//定义全局的过滤器

import Vue from 'vue'
import moment from 'moment'
Vue.filter('dataformat', function(datastr, pattern = 'YYYY-MM-DD ') {
    return moment(datastr).format(pattern)
})