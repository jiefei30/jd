<template>
  <div class="main-content">
    <!-- 广告组件 -->
    <advertisement v-if="!$store.state.adclosed" />
    <!-- 主页搜索框组件 -->
    <jdmenu></jdmenu>
    <!-- 轮播组件 -->
    <lunbo />

    <!-- 分类框 -->
    <div class="classification-box">
      <div style="margin-bottom:15px">
        <a href="javascript:;">
          <!-- 广告2   gif -->
          <img src="./assets/ad2.gif" alt="" style="width:100%">
        </a>
      </div>
      <!-- 分类组件 -->
      <classification v-for="imgicon in classicon" :key="imgicon.id" :imgsrc="imgicon.imgsrc"
        :imgname="imgicon.imgname" />
    </div>

    <!-- 东京秒杀内容 -->
    <div class="seckill-box">
      <div class="seckill-content">
        <div class="seckill-title">
          <img src="./assets/seckilltitle.png" class="seckilltitle">
          <span>更多秒杀 > </span>
        </div>
        <!-- 秒杀组件 -->
        <seckill v-for="sec in seckillinf" :key="sec.id" :imgsrc="sec.imgsrc" :new="sec.new" :old="sec.old" />
      </div>
    </div>

    <!-- 新人提示 -->
    <div class="newguy">
      <a href="">
        <img src="./assets/newguy1.jpg" alt="">
      </a>
      <a href="">
        <img src="./assets/newguy2.jpg" alt="">
      </a>
    </div>
    <div>
      <img src="./assets/ad3.jpg" alt="" style="width:100%">
    </div>

    <!-- 分类2 -->
    <div class="yard">
      <!-- 商品组件2 -->
      <hangon v-for="hangons in hangoninf" :key="hangons.id" :hotitlea="hangons.hotitlea" :hotitleb="hangons.hotitleb"
        :hostyle="hangons.hostyle" :imgsrc="hangons.imgsrc" />
    </div>
    <div>
      <img src="./assets/ad4.jpg" alt="" style="width:100%">
    </div>
    <div class="yard">
      <!-- 商品组件2 -->
      <hangon v-for="hangons in hangoninfb" :key="hangons.id" :hotitlea="hangons.hotitlea" :hotitleb="hangons.hotitleb"
        :hostyle="hangons.hostyle" :imgsrc="hangons.imgsrc" />
    </div>
    <div>
      <img src="./assets/ad5.png" alt="" style="width:100%">
    </div>

    <!-- 最下面的推荐部分 -->
    <div class="recommend-box">
      <!-- 推荐商品组件 -->
      <recommend v-for="recommends in recommendsinf" :key="recommends.id" :imgsrc="recommends.imgsrc"
        :ziying="recommends.ziying" :title="recommends.title" :price="recommends.price" :type="recommends.type" />
    </div>
  </div>
</template>

<script>
  //导入ajax，模拟请求
  import axios from "axios"
  //导入广告组件
  import advertisement from './components/index/Advertisement.vue'
  //导入搜索框组件
  import jdmenu from './components/index/menu.vue'
  //导入轮播组件
  import lunbo from './components/index/lunbo.vue'
  //导入分类组件
  import classification from './components/index/classification.vue'
  //导入限时秒杀组件
  import seckill from './components/index/seckill.vue'
  //导入主页商品组件
  import hangon from './components/index/hangon.vue'
  //导入商品推荐组件
  import recommend from './components/index/recommend.vue'

  import $ from 'jquery'

  export default {
    name: "index",
    components: {
      advertisement,
      jdmenu,
      lunbo,
      classification,
      seckill,
      hangon,
      recommend
    },
    data() {
      return {
        //分类商品
        classicon: [{
            "imgsrc": require("./assets/class1.png.webp"),
            "imgname": "京东超市"
          },
          {
            "imgsrc": require("./assets/class2.png.webp"),
            "imgname": "数码电器"
          },
          {
            "imgsrc": require("./assets/class3.png.webp"),
            "imgname": "京东服饰"
          },
          {
            "imgsrc": require("./assets/class4.png.webp"),
            "imgname": "京东生鲜"
          },
          {
            "imgsrc": require("./assets/class5.png.webp"),
            "imgname": "京东到家"
          },
          {
            "imgsrc": require("./assets/class6.png.webp"),
            "imgname": "充值缴费"
          },
          {
            "imgsrc": require("./assets/class7.png.webp"),
            "imgname": "9.9元拼"
          },
          {
            "imgsrc": require("./assets/class8.png.webp"),
            "imgname": "领券"
          },
          {
            "imgsrc": require("./assets/class9.png.webp"),
            "imgname": "赚钱"
          },
          {
            "imgsrc": require("./assets/class10.png.webp"),
            "imgname": "PLUS会员"
          }
        ],
        //限时秒杀
        seckillinf: [{
            imgsrc: require("./assets/seckill1.png.webp"),
            new: "35.8",
            old: "69.8"
          },
          {
            imgsrc: require("./assets/seckill2.jpg"),
            new: "224",
            old: "258"
          },
          {
            imgsrc: require("./assets/seckill3.jpg"),
            new: "648",
            old: "999"
          },
          {
            imgsrc: "http://img14.360buyimg.com/n1/s150x150_jfs/t1/78877/35/5349/200178/5d384adaE0b33e36e/cc55855386897032.jpg.dpg",
            new: "36",
            old: "69.9"
          }
        ],
        //商品信息
        hangoninf: [{
            hotitlea: "我的大学",
            hotitleb: "全新生活",
            hostyle: 0,
            imgsrc: require("./assets/hangon1.jpg")
          },
          {
            hotitlea: "女神心经",
            hotitleb: "一站备齐",
            hostyle: 0,
            imgsrc: require("./assets/hangon2.jpg")
          },
          {
            hotitlea: "",
            hotitleb: "",
            hostyle: 0,
            imgsrc: ""
          },
          {
            hotitlea: "",
            hotitleb: "",
            hostyle: 0,
            imgsrc: ""
          },
          {
            hotitlea: "健身打卡",
            hotitleb: "健身打卡",
            hostyle: 5,
            imgsrc: require("./assets/hangon3.jpg")
          },
          {
            hotitlea: "二手寻宝",
            hotitleb: "跳蚤市场",
            hostyle: 5,
            imgsrc: require("./assets/hangon4.jpg")
          },
          {
            hotitlea: "街头范儿",
            hotitleb: "我有我性格",
            hostyle: 5,
            imgsrc: require("./assets/hangon5.jpg")
          },
          {
            hotitlea: "唱片潮流",
            hotitleb: "享悠然生活",
            hostyle: 5,
            imgsrc: require("./assets/hangon6.jpg")
          }
        ],
        hangoninfb: [{
            hotitlea: "免息星球",
            hotitleb: "白条免息购",
            hostyle: 1,
            imgsrc: require("./assets/hangon7.jpg")
          },
          {
            hotitlea: "品牌闪购",
            hotitleb: "购大牌好物",
            hostyle: 1,
            imgsrc: require("./assets/hangon8.jpg")
          },
          {
            hotitlea: "品牌秒杀",
            hotitleb: "低价抢大牌",
            hostyle: 2,
            imgsrc: require("./assets/hangon9.jpg")
          },
          {
            hotitlea: "京东直播",
            hotitleb: "边看边买",
            hostyle: 3,
            imgsrc: require("./assets/hangon10.jpg")
          },
          {
            hotitlea: "排行榜",
            hotitleb: "热销推荐",
            hostyle: 4,
            imgsrc: require("./assets/hangon11.jpg")
          },
          {
            hotitlea: "拍拍好物",
            hotitleb: "爱疯5折起",
            hostyle: 3,
            imgsrc: require("./assets/hangon12.jpg")
          },
          {
            hotitlea: "新品首发",
            hotitleb: "vivio X27",
            hostyle: 2,
            imgsrc: require("./assets/hangon13.jpg")
          },
          {
            hotitlea: "发现好货",
            hotitleb: "教你买买买",
            hostyle: 1,
            imgsrc: require("./assets/hangon14.jpg")
          }
        ],
        //当前展示的推荐商品
        recommendsinf: [],
        //获取到的所有商品信息
        recommendsinfs: [],
        xinxin: []
      }
    },
    methods: {},
    //生命周期函数
    async created() {
      //得到商品分类json信息
      const res1 = await axios.get("http://139.155.17.127/xinxin.json");
      this.xinxin = res1.data
      const res2 = await axios.get("http://139.155.17.127/recommend.json");
      this.recommendsinfs = res2.data
      for (var x = 0; x < 20; x++) {
        this.recommendsinf.push(this.recommendsinfs[x])
      }
      var vm = this
      var done = true
      $(window).scroll(function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        //如果在顶部
        if (t == 0) {
          vm.$store.state.isscoll = false;
        } else {
          vm.$store.state.adclosed = true;
          vm.$store.state.isscoll = true;
        }
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight) {
          if (done)
            for (var te = 0; te < vm.xinxin.length; te++) {
              vm.recommendsinf.push(vm.xinxin[te])
              done = false
            }
        }
      });
    }
  }
</script>

<style>
  .classification-box {
    padding-top: 15px;
    position: relative;
    margin-top: -12px;
    z-index: 12;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
    background-color: #fff;
    padding-bottom: 10px;
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
    -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
  }

  .main-content {
    height: 100%;
    background-color: rgb(246, 246, 246);
  }

  .seckill-box {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow: hidden;
    white-space: nowrap;
  }

  .seckill-content {
    position: relative;
    width: 1080px;
    background-color: #fff;
    overflow: hidden;
    white-space: nowrap;
  }

  .seckill-title {
    background-image: url("./assets/seckillbg.png");
    background-size: contain;
    height: 44px;
  }

  .seckilltitle {
    display: block;
    float: left;
    width: 75px;
    height: 25px;
    margin-top: 8px;
    margin-left: 10px;
  }

  .seckill-title span {
    display: block;
    float: right;
    margin-top: 10px;
    color: red;
  }

  .newguy {
    width: 95%;
    margin: 0 auto;
    border-radius: 15px 15px 0 0;
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
    -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
    overflow: hidden;
  }

  .newguy img {
    width: 50%;
  }

  .yard {
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;
  }

  .recommend-box {
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 10px;
  }
</style>