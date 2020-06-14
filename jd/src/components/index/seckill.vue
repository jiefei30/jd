<template>
    <div class="seckill-commodity">
        <a href="">
            <img :src="this.imgsrc">
        </a>
        <br>
        <span class="newprice"><b>¥{{this.new}}</b></span>
        <br>
        <span class="oldprice">¥{{this.old}}</span>
    </div>
</template>

<script>
    import uuid from 'uuid'
    export default {
        name: "seckill",
        props: ["imgsrc", "new", "old"],
        data() {
            return {
                id: uuid.v4()
            }
        }
    }
</script>

<style>
    .seckill-commodity {
        position: relative;
        float: left;
        width: 70px;
        height: 112px;
        padding: 2px;
        text-align: center;
        margin: 10px;
        padding-bottom: 20px;
    }

    .seckill-commodity img {
        width: 100%;
    }

    .newprice {
        font-size: 17px;
        color: red;
    }

    .oldprice {
        font-size: 10px;
        text-decoration: line-through;
        color: rgb(157, 157, 157);
    }
</style>