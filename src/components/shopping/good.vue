<template>
    <div class="goodmodual">
        <div class="good-detail">
            <div class="good-img">
                <img :src="this.imgsrc">
            </div>
            <div class="good-title">
                <p class="goodtitle">{{this.title}}</p>
                <div class="jisuan">
                    <span style="color:red">¥{{this.price}}</span>
                    <span class="jisuan-op" @click="this.delete">删除</span>
                    <span class="jisuan-op" @click="this.add"><b>+</b></span>
                    <span class="jisuan-op"><b>{{this.number}}</b></span>
                    <span class="jisuan-op" @click="this.sub"><b>—</b></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "good",
        props: ["id", "imgsrc", "title", "price", "number"],
        methods: {
            //增加
            add() {
                for (var i in this.$store.state.goods) {
                    if (this.$store.state.goods[i].id == this.id) {
                        this.$store.state.goods[i].number++;
                        this.$store.state.allprice += parseInt(this.price)
                        this.$store.state.allnumber++
                    }
                }
            },
            // 减少
            sub() {
                for (var i in this.$store.state.goods) {
                    if (this.$store.state.goods[i].id == this.id) {
                        if (this.$store.state.goods[i].number > 0) {
                            this.$store.state.goods[i].number--;
                            this.$store.state.allprice -= parseInt(this.price)
                            this.$store.state.allnumber--
                        }
                    }
                }
            },
            // 删除
            delete() {
                this.$store.state.allprice -= this.number * this.price;
                this.$store.state.goods = this.$store.state.goods.filter(todo => todo.id !== this.id);
                this.$store.state.allnumber -= this.number;
                if (this.$store.state.allnumber == 0) this.$store.state.ishavegood = false

            }
        }
    }
</script>

<style>
    .goodmodual {
        border: 1px solid rgb(157, 157, 157);
        padding: 10px;
        margin: 10px;
        background-color: #fff;
    }

    .good-img {
        float: left;
        margin-right: 10px;
    }

    .good-detail {
        width: 100%;
        height: 80px;
        overflow: hidden;
    }

    .good-img img {
        width: 80px;
        height: 80px;
    }
    .goodtitle{
        display: block;
        overflow: hidden;
        font-size: 14px;
        height: 42px;
    }
    .jisuan {
        margin-top: 10px;
    }

    .jisuan-op {
        display: block;
        text-align: center;
        width: 30px;
        margin-left: 10px;
        background-color: rgb(157, 157, 157);
        position: relative;
        top: 3px;
        float: right;
        font-size: 13px;
    }
</style>