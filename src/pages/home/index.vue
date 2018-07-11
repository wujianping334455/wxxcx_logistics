<template>
    <div class="home">
        <h-swiper></h-swiper>
        <search></search>
        <h-scan></h-scan>
        <scroll-div>
            <o-list></o-list>
        </scroll-div>
    </div>
</template>

<script>
const token = "Bearer eyJhbGciOiJIUzI1NiIsImNhbGciOiJHWklQIn0.H4sIAAAAAAAAAFXMQQqDMBBG4bvMOgOOmUjiFTxFMvkL6aJII7VFvLvtstvHxzuo9U4z3feNO56vZiBHLW80SxCJkw7RO8J7_QX1Osrgg6NHuf2LvLYFn-9JUs0RvrKhBFbFxNnSyBWarEQrFULnBWPus9N4AAAA.ziRA3yyD0E-IKlv7Ry-UN685J7s3RIDAZqZlnm-AczQ";
import swiper from "@/components/swiper/swiper";
import search from "@/components/common/search";
import scan from "@/components/order/scan";
import list from "@/components/order/list";
import fly from '@/utils/fly'
export default {
    data() {
        return {
            restaurant:[],
            page: 1,
            isShow: false,
            isHidden: false,
            selected: null  
        }
    },
    created(){},
    components: {
        "h-swiper": swiper,
        search,
        "h-scan":scan,
        "o-list":list
    },
    mounted(){
        // 微信登录--用户
        wx.login({
            success: res => {
                let param = {"code": res.code,"appName": "CANDYBOT_WEIXIN"}
                // 获取openid和unionId接口
                wx.request({
                    url: 'https://api.ctirobot.com/api/jwt/v1/weixin/login',
                    method: 'POST',
                    data: param,
                    header: {"Authorization": token},
                    success: function(rep) {
                        switch (rep.statusCode) {
                            case 404:
                                //wx.navigateTo({url: '/pages/login/main'})
                                let details = rep.data.details;
                                console.log(details)
                                if (details && details.length) {
                                    // 未注册--跳转注册界面
                                    // wx.redirectTo({url: '/pages/login/main'});
                                } else {
                                    console.log("注册登录失败，未找到openId和unionId");
                                }                                               
                                break;
                            case 200:
                                
                                break;
                            default:
                                console.log(rep);
                                break;
                        }
                    }
                })
            }
        })
    },
    methods: {
        toIndex() {
            wx.navigateTo({
                url: '/pages/index/main',
                success: function(res){
                    console.log("success")
                }
            })
        }
    },
    onReachBottom() {}
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    background-color: #F7F7F7;
}
</style>
