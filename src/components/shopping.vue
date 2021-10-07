<template>
    <div class="shopping-box">
        <div class="shopping-header">
            <router-link to="/">
                <span style="position:relative;left:2%"> <b>{{cancel}} </b></span>
            </router-link>
            <span style="position:relative;left:38%">购物车</span>
            <span style="position:relative;left:72%;bottom:7px"
            ><b>...</b></span>
        </div>
        <div class="purchased">
            <!-- 如果没有商品显示这个 -->
            <div class="nothing" v-if="!this.$store.state.ishavegood">
                <img src="../assets/nothing.png" alt="">
                <span>购物车空空如也，去逛逛吧~</span>
            </div>
            <!-- 有商品显示这个 -->
            <div v-if="this.$store.state.ishavegood">
                 <good v-for="goods in this.$store.state.goods"
                 :key="goods.id"
                 :id="goods.id"
                 :imgsrc="goods.imgsrc"
                 :title="goods.title"
                 :price="goods.price"
                 :number="goods.number"/>
            </div>
        </div>
        <div class="seckill-box">
            <div class="seckill-content">
              <div class="seckill-title">
                <img src="../assets/seckilltitle.png" class="seckilltitle">
                <span>更多秒杀 > </span>
              </div>
              <seckill v-for="sec in seckillinf" :key="sec.id" 
              :imgsrc="sec.imgsrc" :new="sec.new" :old="sec.old" />
            </div>
        </div>
        <div>
          <img src="../assets/ad5.png" alt="" style="width:100%">
        </div>
        <div class="recommend-box">
          <recommend v-for="recommends in recommendsinf" 
          :key="recommends.id"
          :imgsrc="recommends.imgsrc"
          :ziying="recommends.ziying"
          :title="recommends.title"
          :price="recommends.price"
          :type="recommends.type"/>
        </div>
        <!-- 结算部分 -->
        <div class="pay">
            <div class="pay-confirm" :class="{'no-goods':!this.$store.state.ishavegood,'shopping-cursor':this.$store.state.ishavegood}"> 
              去结算<span style="font-size=10px" v-if="this.$store.state.ishavegood">({{this.$store.state.allnumber}}件)</span>
            </div>
            <div class="money" v-if="this.$store.state.ishavegood">
                总计：<span style="color:red">¥{{this.$store.state.allprice}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import seckill from "./index/seckill.vue"
import recommend from "./index/recommend.vue"
import good from "./shopping/good.vue"

export default {
name:"shopping",
components:{
    seckill,
    recommend,
    good
},
props:[],
data(){
    return{
        cancel:"<",
        //购物车是否为空
        isnothing:true,
        seckillinf:[
        {
          imgsrc:require("../assets/seckill1.png.webp"),
          new:"35.8",
          old:"69.8"
        },
        {
          imgsrc:require("../assets/seckill2.jpg"),
          new:"224",
          old:"258"
        },
        {
          imgsrc:require("../assets/seckill3.jpg"),
          new:"648",
          old:"999"
        },
        {
          imgsrc:"//img14.360buyimg.com/n1/s150x150_jfs/t1/78877/35/5349/200178/5d384adaE0b33e36e/cc55855386897032.jpg.dpg",
          new:"36",
          old:"69.9"
        }
      ],
     //当前展示的推荐商品
        recommendsinf: [],
        //获取到的所有商品信息
        recommendsinfs: []
    }
},
async created(){
       //得到商品分类json信息
      const res2 = await axios.get("http://139.155.17.127/recommend.json");
      this.recommendsinfs = res2.data
      for(var x=0;x<10;x++){
           this.recommendsinf.push(this.recommendsinfs[x])
      }
    }
}
</script>

<style>
.shopping-cursor{
  cursor: pointer;
}
.shopping-header{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid rgb(229, 229, 229);
    padding-top: 10px;
}
.shopping-header span{
    font-size: 20px;
}

.shopping-box{
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow: hidden;
    background-color: rgb(247, 247, 247);
}
.shopping-flex{
    display: flex;
    justify-content: space-around;
}
.nothing{
    width: 100%;
    text-align: center;
    padding: 30px;
}
.nothing img{
    display: block;
    margin: 0 auto;
    width: 20%;
}
.nothing span{
    display: inline-block;
    margin-top: 10px;
    color: rgba(51,51,51,.66);
}
.pay{
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 50px;
    background: hsla(0,0%,100%,.95);
    color: #333;
    font-size: 14px;
    position: fixed;
    z-index: 99;
    bottom: 70px;
}
.pay-confirm{
    float: right;
    display: block;
    width: 110px;
    height: 50px;
    margin-left: 10px;
    line-height: 50px;
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    background: #e4393c;
    color: #fff;
}
.no-goods{
  background-color: rgb(157, 157, 157)
}
.money{
  float: right;
  /* width: 100%; */
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
}
</style>
