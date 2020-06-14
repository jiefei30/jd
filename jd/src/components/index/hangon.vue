<template>
    <div class="hangon">
        <span class="hangon-title1" :style="hostyles[this.hostyle]">
            {{hotitlea}}
        </span>
        <br>
        <span class="hangon-title2">{{this.hotitleb}}</span>
        <br>
        <a href="javascript:;">
            <img :src="this.imgsrc">
        </a>
    </div>
</template>

<script>
    export default {
        name: "hangon",
        props: ["hotitlea", "hotitleb", "imgsrc", "hostyle"],
        data() {
            return {
                hostyles: [{
                        backgroundImage: "-webkit-linear-gradient(90deg, #45CAFF,#1471FB)"
                    },
                    {
                        backgroundImage: "-webkit-linear-gradient(90deg, #FF2A2A,#F139D2)"
                    },
                    {
                        backgroundImage: "-webkit-linear-gradient(90deg, #FE8537,#F02B2B)"
                    },
                    {
                        backgroundImage: "-webkit-linear-gradient(90deg, #00C2AB,#3E94FF)"
                    },
                    {
                        backgroundImage: "-webkit-linear-gradient(90deg, #2AD396,#85BB1F)"
                    },
                    {
                        backgroundImage: "-webkit-linear-gradient(90deg, #000,#000)"
                    }
                ]
            }
        }
    }
</script>

<style>
    .hangon {
        position: relative;
        float: left;
        width: 85px;
        height: 128px;
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        border: 1px solid rgb(246, 246, 246);
    }

    .hangon img {
        width: 65%;
    }

    .hangon-title1 {
        font-weight: 700;
        font-size: 18px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .hangon-title2 {
        font-size: 12px;
        color: #000;
    }
</style>