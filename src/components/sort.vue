<template>
    <div class="sort-box">
        <!-- 头部 -->
        <div class="sort-header">
            <router-link to="/">
                <span> <b>{{cancel}} </b></span>
            </router-link>
            <input type="text" class="sort-input" placeholder="联想一体机">
            <a href="javascript:;">
                <img class="sort-search" src="../assets/sort-search.png" alt="">
            </a>
        </div>
        <div class="sort-content">
            <!-- 左边的分类 -->
            <div class="sortting">
                <div class="sortting-list">
                    <ul class="sort-ul">
                        <li v-for="sorts in sorts" :key="sorts.id">
                            <a href="javascript:;" style="color:#000;font-size:13px">
                                {{sorts.title}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 右边的具体组件 -->
            <div class="sortmodual">
                <p style="position:relative;left:5px;"><b>{{cursort}}</b></p>
                <sortblock v-for="sortblocks in sortblocks" :key="sortblocks.id" :imgsrc="sortblocks.imgsrc"
                    :name="sortblocks.name" />
            </div>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid"
    import sortblock from "./sort/sortblock.vue"
    export default {
        name: "sort",
        components: {
            sortblock
        },
        data() {
            return {
                cancel: "<",
                cursort: "热门分类",
                sorts: [{
                        id: uuid.v4(),
                        title: "热门推荐"
                    },
                    {
                        id: uuid.v4(),
                        title: "手机数码"
                    },
                    {
                        id: uuid.v4(),
                        title: "家用电器"
                    },
                    {
                        id: uuid.v4(),
                        title: "电脑办公"
                    },
                    {
                        id: uuid.v4(),
                        title: "计生情趣"
                    },
                    {
                        id: uuid.v4(),
                        title: "美妆护肤"
                    },
                    {
                        id: uuid.v4(),
                        title: "个肤清洁"
                    },
                    {
                        id: uuid.v4(),
                        title: "汽车生活"
                    },
                    {
                        id: uuid.v4(),
                        title: "京东超市"
                    },
                    {
                        id: uuid.v4(),
                        title: "男装"
                    },
                    {
                        id: uuid.v4(),
                        title: "男鞋"
                    },
                    {
                        id: uuid.v4(),
                        title: "女装"
                    },
                    {
                        id: uuid.v4(),
                        title: "女鞋"
                    },
                    {
                        id: uuid.v4(),
                        title: "母婴"
                    },
                    {
                        id: uuid.v4(),
                        title: "童装"
                    },
                    {
                        id: uuid.v4(),
                        title: "图书音像"
                    },
                    {
                        id: uuid.v4(),
                        title: "户外运动"
                    },
                    {
                        id: uuid.v4(),
                        title: "内衣配饰"
                    }
                ],
                sortblocks: [{
                        imgsrc: "//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png",
                        name: "手机"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png",
                        name: "耳机"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
                        name: "华为"
                    },
                    {
                        imgsrc: "//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png",
                        name: "电饭煲"
                    },
                    {
                        imgsrc: "//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png",
                        name: "电磁炉"
                    },
                    {
                        imgsrc: "//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png",
                        name: "路由器"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/18974/35/9836/31220/5c82223eE5dcc61b8/4e93c1fbb777bfca.png",
                        name: "避孕套"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png",
                        name: "口红"
                    },
                    {
                        imgsrc: "//img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png",
                        name: "吹风机"
                    },
                    {
                        imgsrc: "//img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png",
                        name: "三只松鼠"
                    },
                    {
                        imgsrc: "//img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png",
                        name: "洗衣液"
                    },
                    {
                        imgsrc: "//img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png",
                        name: "保温杯"
                    },
                    {
                        imgsrc: "//img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png",
                        name: "微波炉"
                    },
                    {
                        imgsrc: "//img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png",
                        name: "洗发水"
                    },
                    {
                        imgsrc: "//img20.360buyimg.com/focus/s140x140_jfs/t1/19562/14/9878/32183/5c8225f6E7c332db7/c886e52dc05b9ae4.png",
                        name: "卫生巾"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png",
                        name: "耳机"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
                        name: "华为"
                    },
                    {
                        imgsrc: "//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png",
                        name: "电饭煲"
                    },
                    {
                        imgsrc: "//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png",
                        name: "电磁炉"
                    },
                    {
                        imgsrc: "//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png",
                        name: "路由器"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png",
                        name: "耳机"
                    },
                    {
                        imgsrc: "//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png",
                        name: "华为"
                    },
                    {
                        imgsrc: "//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png",
                        name: "电饭煲"
                    },
                    {
                        imgsrc: "//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png",
                        name: "电磁炉"
                    },
                    {
                        imgsrc: "//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png",
                        name: "路由器"
                    }

                ]
            }
        }
    }
</script>

<style>
    .sort-box {
        width: 100%;
        height: auto;
        min-height: 100%;
        overflow: hidden;
    }

    .sort-header {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid rgb(229, 229, 229);
    }

    .sort-header span {
        display: inline-block;
        margin: 8px 20px 0px 20px;
        font-size: 20px;
        color: rgb(93, 95, 106);
    }

    .sort-input {
        display: inline-block;
        width: 75%;
        border: none;
        border-radius: 15px;
        height: 30px;
        overflow: hidden;
        background: #f7f7f7;
        font-size: 14px;
        -webkit-box-align: center;
        line-height: 30px;
        /* margin-top: 4px; */
        padding-left: 15px;
    }

    .sort-search {
        width: 7%;
        position: relative;
        top: 13px;
        left:4px;
    }

    .sort-content {
        height: auto;
        min-height: 100%;
    }

    .sortting {
        width: 70px;
        background: #f8f8f8;
        float: left;
        height: auto;
        overflow-y: auto;
        min-height: 100%;
    }

    .sortting-list {
        /* overflow: hidden;
    height: auto; */
    }

    .sort-ul {
        transform: translateY(0px);
        display: block;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow: hidden;
    }

    .sort-ul li {
        display: block;
        padding: 8px;
        width: 100%;
        height: 46px;
        text-decoration: none;
        color: #000;
        font-size: 15px;
    }

    .sortmodual {
        height: 100%;
        width: 100%;
        background-color: #fff;
        padding: 10px;
    }
</style>