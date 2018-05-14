<template lang="pug">
  .login-wrapper
    .login
      .logo
        img(:src="loginLogoSrc")
      el-form
        el-form-item.mobile
          el-input(type="text", placeholder="手机号",  v-model.trim="mobile")
        el-form-item.captcha(v-show="isMobile && isInputting")
          el-input(type="text", placeholder="验证码", v-model.trim="captcha")
        el-form-item(v-show="isMobile && !isInputting")
          el-button.getcode-btn(@click="getCodeEvt", type="primary") 获取验证码
        el-form-item(v-show="isMobile && isCaptcha")
          el-button.login-btn(@click="submit", type="primary") 登录

</template>
<script>
  // import { getCode, login } from 'api/login'
  // import Cookies from 'cookies'
  // 背景动画
  import nest from 'assets/js/nest'

  export default {
    name: 'Login',
    data () {
      return {
        loginLogoSrc: require('assets/images/loginLogo.png'),
        mobile: (location.hostname === 'localhost') ? '18368002603' : '',
        captcha: '',
        isMobile: location.hostname === 'localhost',
        isCaptcha: false,
        isInputting: false
      }
    },
    watch: {
      mobile (newVal) {
        let regFunc = val => /^[1][0-9]{10}$/.test(val)
        this.isMobile = regFunc(newVal)
        this.isCaptcha = false
        this.isInputting = false
        this.captcha = ''
      },
      captcha (newVal) {
        let regFunc = val => /^[0-9]{6}$/.test(val)
        this.isCaptcha = regFunc(newVal)
      }
    },
    methods: {
      getCodeEvt () {
        let self = this
        self.isInputting = true
        // getCode({mobile: self.mobile}).then(({data: {captcha}}) => {
        //   setTimeout(function () {
        //     self.$nextTick(() => {
        //       self.isInputting = false
        //       self.isCaptcha = false
        //     })
        //   }, captcha.freezing_seconds * 1000)
        // }).catch()
      },
      submit () {
        // login(this.mobile, this.captcha).then(({code, data}) => {
        //   if (code === 0) {
        //     Cookies({'access_token': data.access_token})
        //     this.$store.dispatch('setUserInfo').then(() => {
        //       this.$router.push({path: '/dashboard'})
        //     }).catch(e => e)
        //   } else {
        //     this.mobile = ''
        //     this.captcha = ''
        //     this.isMobile = false
        //     this.isCaptcha = false
        //     this.isInputting = false
        //   }
        // }).catch(e => e)
      }
    },
    mounted () {
      // 动画配置
      nest({
        // 父节点
        root: 'login-wrapper',
        // id
        len: 12,
        // 颜色
        color: '210, 220, 230',
        // 数量
        count: 200,
        // 透明度
        opacity: 0.8,
        zIndex: 1
      })
    }
  }
</script>
<style lang="stylus">
  @import "~assets/css/common"

  .login-wrapper
    width: 100%
    height: 100%
    background: #497091 url('~assets/images/loginBg.jpg') no-repeat 0 0
    background-size: cover
    display: flex
    align-items: center
    justify-content center
    .login
      position: relative
      z-index: 2
      width: 360px
      padding: 30px
      height: 600px
      background: linear-gradient(to bottom, rgba(71, 86, 105, 0.9) 0%, rgba(255, 255, 255, 0.1) 100%)
      box-shadow rgba(0, 0, 0, .3) 0 0 10px
      .logo
        text-align: center
        margin: 40px 0 60px
        img
          width: 200px

      input
        font-size: 18px
        background-color: transparent
        border: 0
        border-bottom: 1px solid #8492A6
        outline: 0
        text-align: center
        color: #ffffff
        border-radius: 0
        &:focus
          border-bottom: rgba(255, 255, 255, .6) 2px solid

      .login-btn
        width: 100%
        margin-top: 60px
        border-radius: 20px
        font-size: 18px
        transition background-color .3s cubic-bezier(0.17, -0.65, 0.665, 1.25)

      .getcode-btn
        display: block
        width: 80%
        margin: 40px auto 0
        border-radius: 20px
        font-size: 18px
        transition background-color .3s cubic-bezier(0.17, -0.65, 0.665, 1.25)
</style>
