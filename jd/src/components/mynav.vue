<template>
    <div class="my-footer">
        <div style=" display: flex;justify-content: space-around;">
            <div class="mynav-icon-box" v-for="navicons in navicon" :key="navicons.id">
                <router-link :to="navicons.href">
                    <img :src="navicons.imgsrc" style="transition: all 0.3s ease;">
                </router-link>
            </div>
        </div>
        <div class="goodsnumber" v-if="this.$store.state.ishavegood" :class="{donghua:this.$store.state.donghua}">
            <span>{{this.$store.state.allnumber}}</span>
        </div>
    </div>
</template>

<script>
    import uuid from 'uuid'
    export default {
        name: "mynav",
        data() {
            return {
                navicon: [{
                        id: uuid.v4(),
                        imgsrc: require("../assets/nav1.png"),
                        href: "/index"
                    },
                    {
                        id: uuid.v4(),
                        imgsrc: require("../assets/nav2.png"),
                        href: "/sort"
                    },
                    {
                        id: uuid.v4(),
                        imgsrc: require("../assets/nav3.png"),
                        href: "/goods"
                    },
                    {
                        id: uuid.v4(),
                        imgsrc: require("../assets/nav4.png"),
                        href: "/shopping"
                    }
                ]
            }
        }
    }
</script>

<style>
    .router-link-active img {
        background-color: rgb(242, 48, 48);
    }
    .my-footer {
        padding-top: 9px;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 31;
        width: 100%;
        height: 70px;
        background-color: #fff;
        box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
        -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
    }

    .mynav-icon-box {
        display: block;
        float: left;
        height: 50px;
        text-align: center;
    }

    .mynav-icon-box img {
        width: 75%;
    }

    .goodsnumber {
        float: right;
        text-align: center;
        background-color: greenyellow;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        font-size: 15px;
        position: relative;
        bottom: 50px;
        right: 2%;
        color: red;
    }
</style>