<template>
    <div class="company-box">
        <img :src="company.url" alt="快递公司" />
        <div class="point">
            <div class="time">{{company.hunName}}--->{{company.waypiontName}}（{{company.userName}})</div>
            <div class="address">订单号：{{company.orderNum}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        company:{
            type:Object
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