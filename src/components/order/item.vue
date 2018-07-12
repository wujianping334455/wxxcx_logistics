<template>
    <div class="order-item">
        <o-i-status></o-i-status>
        <o-i-company :company="order"></o-i-company>
        <o-i-menu></o-i-menu>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import status from "@/components/order/status";
import company from "@/components/order/company";
import menu from "@/components/order/menu";
export default {
    props:{
        order:{
            type:Object
        }
    },
    components: {
        "o-i-status":status,
        "o-i-company":company,
        "o-i-menu":menu
    }
}
</script>
<style lang="scss" scoped>
.order-item{
    margin-bottom: 30rpx;
}
</style>