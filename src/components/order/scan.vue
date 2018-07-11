<template>
    <div class='robot-scan'>
        <div class="item">
            <image class='bgImg' src='/static/images/home/robot_scan.png' />
            <div class='text'>扫码开箱</div>
        </div>
        <div class="item">
            <image class='bgImg' src='/static/images/home/robot_consignee.png' />
            <div class='text'>收取快件</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return {}
    },
    mounted(){
        console.log(`列表组件已挂载...`);
    },
    methods: {
        changeDialog(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
.robot-scan {
    display: flex;
    width: 100%;
    height: auto;
    flex-wrap: nowrap;
    justify-content: space-around;
    font-size: 26rpx;
    background-color: #ffffff;
    margin:30rpx 0;
    .item {
        text-align: center;
    }
    .bgImg {
        display: inline-flex;
        width: 80rpx;
        height: 80rpx;
        margin: 10rpx 0;
    }
}
</style>