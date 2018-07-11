<template>
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
            <swiper-item v-for="(item,i) in imgUrls" :key="i" >
                <image :src="item" class="image" />
            </swiper-item>
    </swiper>
</template>

<script>
export default {
    data() {
        return {
            imgUrls: [
                '/static/images/home/banner.png',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.swiper {
    width: 100%;
    height: 350rpx;
    .image {
        width: 100%;
        height: 350rpx;
    }
}


</style>
