<template>
    <div class='pop-view' v-show="loginDialog">
        <div class='pop-mask'></div>
        <div class='pop-box'>
            <div class='pop-tile'>服务协议</div>
            <scroll-view class='pop-content' scroll-y='true'>
                1、特别声明：您寄递的快件，单票托寄物价值不应超过2万元。如托寄物价值超过2万元，您应拆分至单票价值2万元以下分别寄递。因托寄物性质无法拆分的，请您自行携带或采取其他运输方式以保障快件安全。丰巢及快递公司无审核托寄物价值的能力和义务。
                <div class='pop-top'>2、为保证托寄物安全送达，您寄件时应履行以下义务： </div>
                <div class='pop-top'>（1）如实申报托寄物内容和价值，并准确、清楚地填写您、收件人的名称、地址、联系电话等资料。</div>
                <div class='pop-top'>（2）根据托寄物的性质（尤其是易碎品），提供充分的防破损措施，保障托寄物安全派送。</div>
            </scroll-view>
            <button class="pop-confirm" @click="changeDialog">我知道了</button>
        </div>
    </div> 
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return{
            detailShow: true
        }
    },
    computed: {
        ...mapState('login', {
            loginDialog: state => state.loginDialog
        })
    },
    methods: {
        confirmPop(){
            this.loginDialog();
        },
        ...mapActions('login', [
            'changeDialog'
        ])
    },
    created() {
       
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
/* 协议弹框start */
.pop-view {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center
}
.pop-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222;
    opacity: 0.6;
}

.pop-box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -375rpx;
    margin-left: -250rpx;
    width: 500rpx;
    height: 750rpx;
    background-color: #fff;
    padding: 60rpx 50rpx 30rpx;
    box-sizing: border-box;
    overflow: hidden;
    color: #333;
}

.pop-tile {
    font-size: 34rpx;
    line-height: 34rpx;
    margin-bottom: 56rpx;
}

.pop-content {
    width: 400rpx;
    height: 430rpx;
    font-size: 26rpx;
    line-height: 30rpx;
    font-family: PingFangSC-Regular;
    text-align: left;
    margin: 0 auto;
}

.pop-top {
    margin-top: 40rpx;
}

.pop-confirm {
    border-radius: 4rpx;
    color: #fff;
    text-align: center;
    height: 80rpx;
    line-height: 80rpx;
    width: 400rpx;
    background: linear-gradient(-225deg, #4EEBF2 0%, #4AE7E7 100%);
    margin: 60rpx auto 0;
    font-size: 34rpx;
} 
</style>
