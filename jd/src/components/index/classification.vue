<template>
    <div class="c-icon-box">
        <img :src="this.imgsrc" alt="">
        <br>
        <span style="font-size:13px">{{this.imgname}}</span>
    </div>
</template>

<script>
    import uuid from 'uuid'
    export default {
        name: "classification",
        props: ['imgsrc', 'imgname'],
        data() {
            return {
                id: uuid.v4()
            }
        }
    }
</script>

<style>
    .c-icon-box {
        /* padding-top: 10px; */
        display: block;
        float: left;
        width: 20%;
        height: 50%;
        margin-bottom: 10px;
        text-align: center;

    }

    .c-icon-box img {
        width: 50%;
        cursor: pointer;
    }
</style>