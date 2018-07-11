<template>
    <div class="home">
        <h-swiper></h-swiper>
        <search></search>
        <scroll-view>
            <status></status>
            <company></company>
            <h-menu></h-menu>
        </scroll-view>
    </div>
</template>

<script>
const token = "Bearer eyJhbGciOiJIUzI1NiIsImNhbGciOiJHWklQIn0.H4sIAAAAAAAAAFXMQQqDMBBG4bvMOgOOmUjiFTxFMvkL6aJII7VFvLvtstvHxzuo9U4z3feNO56vZiBHLW80SxCJkw7RO8J7_QX1Osrgg6NHuf2LvLYFn-9JUs0RvrKhBFbFxNnSyBWarEQrFULnBWPus9N4AAAA.ziRA3yyD0E-IKlv7Ry-UN685J7s3RIDAZqZlnm-AczQ";
import swiper from "@/components/swiper/swiper";
import search from "@/components/common/search";
import status from "@/components/order/status";
import company from "@/components/order/company";
import menu from "@/components/order/menu";
import fly from '@/utils/fly'
export default {
    data() {
        return {
            restaurant:[],
            page: 1,
            isShow: false,
            isHidden: false,
            sortList:[{
                    sort: "综合排序",
                    image:"",
                }, {
                    sort: "速度最快",
                    image: "",
                }, {
                    sort: "评分最高",
                    image: "",
                }, {
                    sort: "起送价最低",
                    image: "",
                }, {
                    sort: "配送费最低",
                    image: "",
                }], 
                selected: null  
        }
    },
    created(){
    
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
    components: {
        "h-swiper": swiper,
        search,
        status,
        company,
        "h-menu":menu
    },
      methods: {
          toIndex() {
               wx.navigateTo({
                    url: '/pages/index/main',
                    success: function(res){
                        console.log("success")
                    },
                })
          }
      },
       onReachBottom() {
 
        }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
}
</style>
