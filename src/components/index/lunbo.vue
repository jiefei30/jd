<template>
    <div class="slider-wrapper">
        <ul class="slider-co" :style="{right:this.imgtransform}">
            <li class="lbli" v-for="lb in lbimg" :key="lb.id" :style="{left:lb.left}">
                <a href="">
                    <img :src="lb.src">
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
    import uuid from "uuid"
    export default {
        name: "lunbo",
        data() {
            return {
                imageNumber: 1,
                imgtransform: "000%",
                lbimg: [{
                        id: uuid.v4(),
                        left: "0%",
                        src: require("../../assets/lb1.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "100%",
                        src: require("../../assets/lb2.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "200%",
                        src: require("../../assets/lb3.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "300%",
                        src: require("../../assets/lb4.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "400%",
                        src: require("../../assets/lb5.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "500%",
                        src: require("../../assets/lb6.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "600%",
                        src: require("../../assets/lb7.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "700%",
                        src: require("../../assets/lb8.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "800%",
                        src: require("../../assets/lb9.jpg")
                    },
                    {
                        id: uuid.v4(),
                        left: "900%",
                        src: require("../../assets/lb10.jpg")
                    }
                ]
            }
        },
        methods: {
            imgDistance() {
                if (this.imageNumber < 10) {
                    this.imgtransform = this.imageNumber + "00%";
                    this.imageNumber++;
                } else {
                    this.imageNumber = 0
                    this.imgtransform = this.imageNumber + "00%";
                    this.imageNumber++;
                }
            }
        },
        created: function () {
            setInterval(this.imgDistance, 3000);
        }

    }
</script>

<style>
    .slider-wrapper {
        width: 100%;
        height: 190px;
        overflow: hidden;
        position: relative;
        margin: 0;
        padding: 0;
        position: relative;
        min-height: 0;
    }

    .slider-co {
        margin-top: -0.7rem;
        transition: all 0.3s ease 0s;
        height: 100%;
        margin: 0;
        right: 0;
        padding: 0;
        position: relative;
        min-height: 0;
    }

    .transformed {
        transform: translateX(-100%);
    }

    .lbli {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    .lbli a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
    }

    .lbli img {
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
</style>