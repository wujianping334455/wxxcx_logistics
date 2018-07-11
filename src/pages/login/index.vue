<template>
    <div class="login">
        <form>
            <div class="user">
                <div class='item border-top'>
                    <div class='name-label'> 手机号码：</div>
                    <input class='name-input' type="text" v-model="phoneNum" placeholder='请输入本人手机号码'/>
                </div>
                <div class='item'>
                    <div class='name-label'> 验证码：</div>
                    <input class='code-input' name='code' maxlength='4' placeholder='请输入验证码' />
                    <div class='code-btn' bindtap="sendCode">获取验证码</div>
                    <!-- <div class='code-btn codeColor'>重新发送(22)</div> -->
                </div>
                 <div class='xieyi' @click="changeDialog">
                    <image class='img' :src='agreeSrc' />
                    <div class='text'>我同意《坎德拉用户协议》</div>
                </div>
            </div>
            <button class='btn' @click="formSubmit">注册</button>
        </form>
        <!-- 协议弹框 -->
        <login-dialog> </login-dialog>
    </div>
</template>

<script>
import loginDialog from '@/components/login/dialog';
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return {
            phoneNum:"13534164079",
            isAgree : false
        }
    },
    onLoad() {
        //this.getList();
    },
    created(){
    
    },
    mounted(){
        console.log(`登录界面已挂载...`);
    },
    computed: {
        agreeSrc: (vueObj)=> vueObj.isAgree ? "/static/images/login/register_pre.png":"/static/images/login/register_nor.png"
    },
    components: {
        'login-dialog':loginDialog
    },
    methods: {
        formSubmit() {
            wx.switchTab({
                url: '/pages/home/main',
                success: function(res){
                    console.log("go to home!")
                },
            })
        },
        changeDialog(){
            if(this.isAgree){
                this.isAgree = false;
            }else{
                this.isAgree = true;
                this.$store.commit('login/LOGIN_DIALOG');
            }
        },
        // ...mapActions('login', [
        //     'changeDialog'
        // ])
    },
    onReachBottom() {},
    onPullDownRefreash(){}
}
</script>

<style lang="scss" scoped>
.border-top {
    border-top: solid 1rpx #D8D8D8;
}
.login{
    background-color: #fff;
    font-family: PingFangSC-Regular;
    .user{
        width: 100%;
        .item{
            border-bottom: solid 1rpx #D8D8D8;
            box-sizing: border-box;
            padding: 0 60rpx;
            font-size: 34rpx;
            color: #333333;
            letter-spacing: 0;
            display: flex;
            .name-label {
                height: 100rpx;
                line-height: 100rpx;
                width: 180rpx;
            }
            .name-input {
                height: 100rpx;
                line-height: 100rpx;
                width: 450rpx;
            }
            .code-input {
                width: 280rpx;
                height: 100rpx;
                line-height: 100rpx;
            }
            .code-btn {
                width: 150rpx;
                height: 100rpx;
                line-height: 100rpx;
                text-align: center;
                margin-left: 20rpx;
                font-size: 26rpx;
                color: #4AE1E7;
                letter-spacing: 0.8rpx;
            }
            .codeColor {
                color: #ddd;
            }
        }
        .xieyi{
            display: flex;
            width: 360rpx;
            margin: 40rpx auto;
        }
        .img{
            height: 30rpx;
            width: 30rpx;
            margin-right: 16rpx;
        }
        .text {
            height: 30rpx;
            line-height: 30rpx;
            font-size: 24rpx;
            color: #333333;
        }
    }
    .btn{
        background-color: #4AE7E7;
        font-size: 34rpx;
        color: #FFFFFF;
        text-align: center;
        letter-spacing: 10rpx;
        height: 100rpx;
        line-height: 100rpx;
        margin: 0rpx 60rpx;
    }
}
</style>
