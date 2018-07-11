<template>
    <div class="company-box">
        <img src="" alt="快递公司" />
        <div class="point">
            <div class="time">深圳大学----->红榴斋（李新奇)</div>
            <div class="address">订单号：870 966 231 222</div>
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
.company-box{
    background-color: #F7F7F7;
    padding: 0 60rpx;
    display: flex;
    height: 180rpx;
    align-items: center;
    img{
        height: 100rpx;
        width: 100rpx;
        border-radius:50%; 
        margin-right: 40rpx;
    }
    .point{
        color: #333333;
        font-size: 13px;
        height: 120rpx;
        .time{
            height: 60rpx;
            line-height: 60rpx;
            margin-bottom: 15rpx;
        }
        .address{
            height: 60rpx;
            line-height: 60rpx;
        }
    }
}
</style>