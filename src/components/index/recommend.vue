<template>
    <div class="recommend">
        <div class="recommend-img">
            <a href="javascript:;">
                <img :src="this.imgsrc" alt="" style="width:100%" @click="buy">
            </a>
        </div>
        <div class="recommend-content">
            <p><i class="ziying" v-if="this.ziying"></i> {{title}}</p>
            <span class="price">¥ {{this.price}}</span>
            <img class="type" :src="this.types[this.type]" alt="">
            <span class="look">看相似</span>
        </div>
    </div>
</template>

<script>
    import uuid from "uuid"
    export default {
        name: "recommend",
        props: ["imgsrc", "ziying", "title", "price", "type"],
        data() {
            return {
                id: uuid.v4(),
                types: ["", require("../../assets/type1.png"),
                    require("../../assets/type2.png")
                ]
            }
        },
        methods: {
            buy() {
                for (var i in this.$store.state.goods) {
                    if (this.$store.state.goods[i].id == this.id) {
                        this.$store.state.goods[i].number++;
                        this.$store.state.allnumber++;
                        this.$store.state.allprice += parseInt(this.price)
                        return;
                    }
                }
                let a = {
                    id: this.id,
                    imgsrc: this.imgsrc,
                    title: this.title,
                    price: this.price,
                    number: 1
                }
                this.$store.state.goods.push(a)
                this.$store.state.allnumber++;
                this.$store.state.ishavegood = true
                this.$store.state.allprice += parseInt(this.price)
            }
        }
    }
</script>

<style>
    .recommend-content {
        padding: 5px;
    }

    .recommend {
        width: 167px;
        height: 240px;
        overflow: hidden;
        padding-bottom: 10px;
        background-color: #fff;
        float: left;
        margin-top: 4px;
        margin-right: 4px;
    }

    .recommend p {
        font-size: 11px;
        display: block;
        overflow: hidden;
        height: 35px;
    }

    .recommend-img {
        width: 100%;
        /* height: 226px; */
    }

    .ziying {
        position: relative;
        top: 3px;
        width: 21px;
        height: 12px;
        display: inline-block;
        background-image: url("../../assets/ziying.png");
        background-size: cover;
    }

    .price {
        color: red;
        font-size: 17px;
    }

    .look {
        font-size: 12px;
        padding: 1px;
        text-align: right;
        display: block;
        border: 1px solid rgb(157, 157, 157);
        color: rgb(157, 157, 157);
        float: right;
    }

    .type {
        width: 15%;
        position: relative;
        top: 6px;
        left: 5px;
    }
</style>