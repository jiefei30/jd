import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false
var store = new Vuex.Store({
  state:{
    //广告是否关闭
    adclosed:false,
    //滚动条是否滑动
    isscoll:false,
    //购物车中是否有货物
    ishavegood:false,
    //已经添加到购物车中的商品
    allnumber:0,
    //总价钱
    allprice:0,
    //购买的商品的详细信息
    goods:[
    ]
  },
  mutations:{
    
  }
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
