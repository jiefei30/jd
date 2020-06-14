<template>
    <div class="sortblock-box">
        <a href="javascript:;">
            <img :src="this.imgsrc" alt="">
        </a>
        <br>
        <span style="font-size:13px">{{this.name}}</span>
    </div>
</template>

<script>
    import uuid from "uuid"
    export default {
        name: "srotblock",
        props: ["imgsrc", "name"],
        data() {
            return {
                id: uuid.v4()
            }
        }
    }
</script>

<style>
    .sortblock-box {
        float: left;
        text-align: center;
        /* margin: 5px;
    padding: 5px; */
        margin-top: 10px;
        width: 90px;
    }

    .sortblock-box img {
        width: 55%;
    }
</style>