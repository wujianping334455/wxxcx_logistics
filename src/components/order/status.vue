<template>
    <div class="state-box">     
        <div class="state">
            <div class="text">已下单</div>
            <div class="text">已确认</div>
            <div class="text">派送中</div>
            <div class="text">已到达</div>
            <div class="text">已签收</div>
        </div>
        <div class="progress">
            <div class="quan-box">
                <div class="xian" />
                <div class="quan completed" />
                <div class="quan error" />
                <div class="quan" />
                <div class="quan" />
                <div class="quan" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return {
            query:"",
        }
    },
    mounted(){
        console.log(`搜索界面已挂载...`);
    },
    methods: {
        formSubmit() {
            
        },
        changeDialog(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
.state-box{
    padding: 0 60rpx; 
    height: 90rpx;
    line-height: 90rpx;
    background-color: #fff;
    .state{      
        display: flex;
        height: 45rpx;
        text-align: center;
        align-items: center;
        text-align: center;
        color: #999999;
        font-size: 12px;
        .text{
            flex: 1;
        } 
    }
    .progress{
        height: 45rpx;
        line-height: 45rpx; 
        .quan-box{
            height: 8rpx;
            background-color: #999999;
            border-radius:4rpx;
            margin: 0 50rpx;
            margin-top: 16rpx;
            display: flex;
            justify-content: space-between;
            position: relative;
            .quan{
                height: 20rpx;
                width: 20rpx;
                border: solid 1rpx #fff;
                border-radius:50%;
                background-color: #999;
                transform: translateY(-40%);
            }
            .error{
                background-color: red; 
            }
            .completed{
                background-color: aqua;
            }
        }
        .xian{
            position: absolute;
            height: 8rpx;
            background-color: aqua;
            border-radius:4rpx;
            width: 100%;
        }
    }
}
</style>