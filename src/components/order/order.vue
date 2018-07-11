<template>
    <div class='search'>
        <input class="ipt" type='text' placeholder='请输入要查询的单号' />
        <image class='btn' src='/static/images/bt_search.png' />
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
.search {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 690rpx;
    height: 60rpx;
    line-height: 60rpx;
    margin: 30rpx 30rpx 60rpx;
    font-size: 26rpx;
    color: #333333;
    letter-spacing: 0;
    background: #F7F7F7;
    padding: 0 20rpx;
    box-sizing: border-box;
    .ipt {
        width: 610rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
    }
    .btn {
        display: inline-block;
        width: 40rpx;
        height: 40rpx;
    }
}
</style>