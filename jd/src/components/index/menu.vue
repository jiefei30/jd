<template>
    <div class="menu-box" :class="{'menu-change':$store.state.adclosed,
    'menuopacity':$store.state.isscoll}">
        <img class="detail" src="../../assets/menu.png" alt="">
        <input type="text" class="menu-input" placeholder="联想一体机">
        <a href="javascript:;">
            <img class="menu-search" src="../../assets/search.png" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: "jdmenu",
    }
</script>

<style>
    .menu-box {
        top: 50px;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 15;
        height: 50px;
        background-color: rgba(228, 49, 48, 0);
        overflow: hidden;
        transition: all 0.2s ease;
    }

    .menuopacity {
        background-color: rgba(228, 49, 48, 1);
    }

    .menu-change {
        top: 0;
    }

    .detail {
        width: 25px;
        display: inline-block;
        margin: 15px 10px 15px 15px;
    }

    .menu-input {
        display: inline-block;
        width: 70%;
        border: none;
        border-radius: 15px;
        height: 30px;
        overflow: hidden;
        background: #f7f7f7;
        font-size: 14px;
        -webkit-box-align: center;
        line-height: 30px;
        margin: 10px;
        padding-left: 15px;
    }

    .menu-search {
        width: 7%;
        position: relative;
        top: 12px;
        /* left: ; */
    }
</style>