<template>
    <div class="tipslayer" v-if="isShow">
        <div class="tipslayer-con">
            <p class="tipslayer-txt">{{firstTxt}}
                <br />{{secondTxt}}
            </p>
            <span class="tipslayer-btn" @click="btonClick">{{btonTxt}}</span>
            <span class="tipslayer-close" @click="closedTemple" v-if="hasClose"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            firstTxt: {
                type: String,
                default: "",
            },
            secondTxt: {
                type: String,
                default: "",
            },
            btonTxt: {
                type: String,
                default: "",
            },
            hasClose: {
                type: Boolean,
                default: true,
            },
            btonFun: {
                type: Function,
                default: () => {}
            }
        },
        name: 'TipsLayer',
        data: function() {
            return {
                isShow: true
            }
        },
        methods: {
            closedTemple: function() {
                this.isShow = false;
            },
            btonClick: function() {
                this.isShow = false;
                this.btonFun();
            }

        }
    }
</script>

<style lang="scss">
    @import "@/assets/style/base.scss";

    .tipslayer {
        position: fixed;
        background: rgba(0, 0, 0, .7);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1001;

        &-con {
            padding: px2rem(59px) px2rem(28px) px2rem(35px);
            background: #FFFFFF;
            border-radius: 12px;
            position: absolute;
            left: px2rem(25px);
            right: px2rem(25px);
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
        }

        &-txt {
            font-size: px2rem(18px);
            color: #FF1350;
            letter-spacing: 0;
            text-align: center;
            margin-bottom: px2rem(21px);
            line-height: 1.5;
        }

        &-btn {
            display: inline-block;
            background-image: linear-gradient(-218deg, #FA357C 0%, #FD4B58 49%, #FE804D 100%);
            border-radius: 100px;
            font-size: px2rem(18px);
            color: #FFFFFF;
            letter-spacing: 0;
            padding: px2rem(10px) px2rem(30px);
        }

        &-close {
            width: px2rem(22px);
            height: px2rem(22px);
            background: url("../../../assets/closedBton.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            right: px2rem(10px);
            top: px2rem(10px);
        }
    }
</style>
