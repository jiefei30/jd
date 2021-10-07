<template>
  <div class="goods-content">
    <div class="sort-header">
      <router-link to="/">
        <span> <b>{{cancel}} </b></span>
      </router-link>
      <input type="text" class="sort-input" placeholder="联想一体机" v-model="searched">
      <a href="javascript:;" @click="searching">
        <img class="sort-search" src="../assets/sort-search.png" alt="">
      </a>
    </div>
    <div class="recommend-box">
      <div>
        <recommend v-for="recommends in recommendsinf" :key="recommends.id" :imgsrc="recommends.imgsrc"
          :ziying="recommends.ziying" :title="recommends.title" :price="recommends.price" :type="recommends.type" />
      </div>
    </div>
    <div class="search-nothing" v-if="this.nothing">
      <img src="../assets/nothing2.png" alt="">
      <br>
      <img class="refresh" src="../assets/refresh.png" @click="refreshing">
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import recommend from "./index/recommend.vue"
  export default {
    name: "goods",
    components: {
      recommend
    },
    methods: {
      //查询方法
      searching() {
        var re = []
        for (var i in this.recommendsinfs) {
          if (!this.recommendsinfs[i].title.indexOf(this.searched)) {
            re.push(this.recommendsinfs[i])
          }
        }
        this.recommendsinf = re
        if (re.length == 0) this.nothing = true;
      },
      //刷新方法
      refreshing() {
        this.recommendsinf = this.recommendsinfs
        this.searched = ""
      }
    },
    data() {
      return {
        cancel: "<",
        //与输入框绑定
        searched: "",
        //查询是否无结果
        nothing: false,
        //当前展示的推荐商品
        recommendsinf: []
      }
    },
    async created() {
      //得到商品分类json信息
      const res2 = await axios.get("http://139.155.17.127/recommend.json")
      this.recommendsinfs = res2.data
      this.recommendsinf = this.recommendsinfs
    }
  }
</script>

<style>
  .goods-content {
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow: hidden;
    background-color: rgb(247, 247, 247);
  }

  .search-nothing {
    width: 100%;
    padding: 50px auto;
    text-align: center;
  }

  .refresh {
    cursor: pointer;
    width: 20%;
  }
</style>