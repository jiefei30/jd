<template>
    <div class="ad-box" id="ad">
        <div class="ad-content">
            <div class="ad-pannel">
                <img src="../../assets/ad-bg.png">
            </div>
            <div class="ad-pannel-co ad-close">
                <img @click="closead" src="../../assets/close.png">
            </div>
            <div class="ad-pannel-co ad-logo">
                <img src="../../assets/logo.png">
            </div>
            <div class="ad-pannel-co ad-txt">
                <span>打开京东App购物</span>
            </div>
            <div class=" ad-pannel-co ad-open">
                <span>立即打开</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "advertisement", //这是主页的头部组件
        data() {
            return {

            }
        },
        methods: {
            closead() {
                this.$store.state.adclosed = true
            }
        }
    }
</script>

<style>
    .ad-content {
        transition: all 0.2s ease;
        height: 50px;
        background-color: #232326;
        width: 100%;
        line-height: 50px;
        position: relative;
        font-size: 0;
        overflow: hidden;
        /* background-image: url("../../assets/ad-bg.png"); */
    }

    .isclose {
        height: 0;
    }

    .ad-pannel {
        /* display: none; */
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 4;
    }

    .ad-pannel img {
        width: 100%;
        height: 100%;
    }

    .ad-box {
        /* position: fixed; */
        width: 100%;
        max-width: 640px;
        min-width: 300px;
        margin: 0 auto;
        font-size: 0;
        top: 0;
        overflow: hidden;
        z-index: 20;
    }

    .ad-pannel-co {
        position: relative;
        z-index: 5;
        float: left;
        overflow: hidden;
    }

    .ad-close {
        width: 16px;
        height: 50px;
        line-height: 50px;
        display: inline-block;
        margin-left: 2.5%;
    }

    .ad-close img {
        position: absolute;
        top: 35%;
        left: 0%;
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    .ad-logo {
        width: 35px;
        height: 50px;
        line-height: 50px;
        margin-left: 5%;
        margin-right: 2.5%;
    }

    .ad-logo img {
        position: absolute;
        top: 16%;
        left: 0%;
        width: 100%;
        height: auto;
    }

    .ad-txt {
        color: #fff;
        text-align: center;
        padding: 0;
        font-size: 13px;
    }

    .ad-open {
        display: inline-block;
        height: 100%;
        width: 31.88%;
        float: right !important;
        text-align: center;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
    }
</style>