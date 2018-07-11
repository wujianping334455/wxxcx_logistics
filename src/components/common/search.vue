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
    width: 100%;
    height: 60rpx;
    line-height: 60rpx;
    font-size: 26rpx;
    color: #333333;
    letter-spacing: 0;
    background: #ffffff;
    padding: 20rpx 0;
    .ipt {
        width: 610rpx;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        margin-left:30rpx;
    }
    .btn {
        width: 40rpx;
        height: 40rpx;
        margin-right:30rpx;
    }
}
</style>
