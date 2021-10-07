<template>
  <div id="app">
    <!-- 路由 -->
    <router-view></router-view>   
    <!-- 导航栏 -->
    <mynav/>
  </div>
</template>

<script>
//导入底部导航栏组件
import mynav from './components/mynav.vue'

export default {
  name: 'app',
  components: {
    mynav
  }
}
</script>

<style>
    
</style>
