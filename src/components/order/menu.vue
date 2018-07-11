<template>
    <div class="menu-btn">
        <button class="view">查看物流</button>
        <button class="grace">取消订单</button>
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
.menu-btn{
    display: flex;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    height: 100rpx;
    padding: 0 30rpx;
    background-color: #fff;
    .view{
        margin-right: 15rpx;
        width: 180rpx;
        height: 60rpx;
        line-height: 60rpx;
        border: 1rpx solid #4AE1E7 ;
        background-color: #fff;
        color: #4AE1E7 ;
        font-size: 17px;
    }
    .grace{
        width: 180rpx;
        height: 60rpx;
        line-height: 60rpx;
        border: 1rpx solid #D8D8D8;
        background-color: #fff;
        color: #999;
        font-size: 17px;
    }
}
</style>