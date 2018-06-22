<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
                <em>&mdash;John Johnson</em>
              </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
    <v-btn @click="testClick">测试弹出</v-btn>
    <v-btn @click="modalClick">【vuejs-modal】弹出</v-btn>
    <v-btn @click="testGet">get api</v-btn>
  </v-container>
</template>

<script>
  import Dialog from '../components/dialog'
  import RestfulSysNavigation from '../api/restful/sys-navigation.js'
  import getSingleton from '../design-pattern/singleton.js'
  /**
   * write a component's description
   */
  import {
    SWITCH_DIALOG
  } from '@/store/const-name.js'
  export default {
    /**
     * @description
     * @returns {any}
     */
    data() {
      return {}
    },
    created() {},
    methods: {
      /**
       * @description vuex主页版本弹出
       */
      testClick() {
        this.$store.dispatch(SWITCH_DIALOG, {
          message: '我就是点点看！'
        })
      },
      /**
       * @description vuejs-modal
       */
      modalClick() {
        Dialog.confirmShow({
          title: '测试标题',
          content: '测试内容！',
          type: 'YES'
        }).then(res => {
          console.log('点击了确定')
        }).catch(rej => {
          console.log('点击了取消')
        })
      },
      /**
       * 测试restful api get 请求
       */
      testGet() {
        const sysNavigationServices = getSingleton(function() {
          return new RestfulSysNavigation()
        })
        sysNavigationServices().get({
          name: '111'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
