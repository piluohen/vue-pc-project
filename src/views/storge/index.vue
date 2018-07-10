<template lang="pug">
  .storge-page
    el-checkbox(v-model="remeber") 选择与否
    div
      div 永久性缓存: {{localToken}}
      div 暂时性缓存: {{sessionToken}}
    el-button-group
      el-button(type="primary", @click="setLocalHandle") 永久性緩存
      el-button(type="success", @click="setSessionHandle") 暫時性緩存
</template>
<script>
  export default {
    name: 'Storge',
    data () {
      return {
        remeber: true,
        token: {
          localToken: {
            token: 'localToken'
          },
          sessionToken: {
            token: 'sessionToken'
          }
        },
        localToken: '',
        sessionToken: ''
      }
    },
    mounted () {
      console.log(this.getLocalStorage('wToken'))
    },
    methods: {
      setLocalStorage (key, val) {
        return localStorage.setItem(key, JSON.stringify(val))
      },
      getLocalStorage (key) {
        return localStorage.getItem(key)
      },
      removeLocalStorage (key) {
        return localStorage.removeItem(key)
      },
      setSessionStorage (key, val) {
        return sessionStorage.setItem(key, JSON.stringify(val))
      },
      getSessionStorage (key) {
        return sessionStorage.getItem(key)
      },
      removeSessionStorage (key) {
        return sessionStorage.removeItem(key)
      },
      setLocalHandle () {
        this.setLocalStorage('wToken', this.token.localToken)
        this.setLocalStorage('remeber', this.remeber)
        this.removeSessionStorage('wToken')
        this.localToken = this.getLocalStorage('wToken')
        this.sessionToken = this.getSessionStorage('wToken')
      },
      setSessionHandle () {
        let remeber = this.getLocalStorage('remeber')
        this.setSessionStorage('wToken', this.token.sessionToken)
        if (remeber === 'false') {
          this.removeLocalStorage('wToken')
        }
        this.localToken = this.getLocalStorage('wToken')
        this.sessionToken = this.getSessionStorage('wToken')
      }
    }
  }
</script>
<style lang="stylus">
.storge-page
  .el-checkbox,
  div
    margin-top 20px
</style>

