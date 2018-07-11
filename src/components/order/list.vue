<template>
    <div class='list'>
        <o-item></o-item>
        <o-item></o-item>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import item from "./item";
export default {
    data() {
        return {}
    },
    components: {
        "o-item":item
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
.list{
    border-bottom:solid 1rpx #ddd;
}
</style>