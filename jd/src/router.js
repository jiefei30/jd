import Vue from 'vue'
import Router from 'vue-router'
import index from './index.vue'
import sort from './components/sort.vue'
import shopping from './components/shopping.vue'
import goods from './components/goods.vue'
 
Vue.use(Router)
 
export default new Router({
    routes: [
        {
            path:"/",
            redirect:"/index"
          },
          {
            path:"/index",
            component: index
          },
          {
            path:"/sort",
            component: sort
          },
          {
            path:"/goods",
            component: goods
          },
          {
            path:"/shopping",
            component: shopping
          }
    ]
})