<template>
    <div class='list'>
        <o-item v-for="(order,index) in orders" :key="index" :order="order"></o-item>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import item from "./item";
export default {
    data() {
        return {
            orders:[
                {
                    url:"/static/images/company/ems.png",
                    companyName:"EMS",
                    hunName:"深圳大学",
                    waypiontName:"红榴斋",
                    userName:"李新奇1",
                    orderNum:"870 966 231 222" 
                },{
                    url:"/static/images/company/shentong.png",
                    companyName:"申通",
                    hunName:"深圳大学",
                    waypiontName:"红榴斋",
                    userName:"李新奇2",
                    orderNum:"870 966 231 222"           
                },{
                    url:"/static/images/company/shunfeng.png",
                    companyName:"顺丰",
                    hunName:"深圳大学",
                    waypiontName:"红榴斋",
                    userName:"李新奇3",
                    orderNum:"870 966 231 222"   
                }
            ]
        }
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