<template>
  <v-app :dark="dark">
    <app-navigation :mini-variant="miniVariant" :clipped="clipped" :drawer="drawer" v-on:changeDark="changeDark" v-on:changeDrawer="changeDrawer"></app-navigation>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <!-- <v-toolbar-title v-text="$t('appTitle')"></v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- 多语言 -->
      <v-menu offset-y>
        <!-- <v-toolbar-title slot="activator"> -->
        <v-btn slot="activator" icon>
          <v-icon>language</v-icon>
        </v-btn>
        <!-- <span>{{$t('i18n')}}</span> -->
        <!-- </v-toolbar-title> -->
        <v-list>
          <v-list-tile v-for="(item,i) in i18nData" :key="i" @click="changeLocale(item.value)">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- 多语言end -->
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-progress-linear :indeterminate="true" :active="progress" height="3"></v-progress-linear>
      <router-breadcrumbs/>
      <transition name="scale-transition">
        <router-view/>
      </transition>
      </transition>
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
    <alert-dialog></alert-dialog>
  </v-app>
</template>

<style scoped>
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>


<script>
  /**
   * write a component's description
   */
  import localeList from '../../i18n/localeList'
  import AppNavigation from '../../components/layout/AppNavigation'
  import AlertDialog from '../../components/dialog/AlertDialog'
  import RouterBreadcrumbs from '../../components/layout/RouterBreadcrumbs'
  export default {
    components: {
      'app-navigation': AppNavigation,
      'alert-dialog': AlertDialog,
      'router-breadcrumbs': RouterBreadcrumbs
    },
    /**
     * @description
     * @returns {any}
     */
    data() {
      return {
        dark: false,
        i18nData: localeList.language,
        clipped: false,
        drawer: true,
        fixed: false,
        right: true,
        rightDrawer: false,
        miniVariant: false
      }
    },
    methods: {
      /**
       * @description 更改多语言设置
       * @param {String} locale
       */
      changeLocale(locale) {
        this.$i18n.locale = locale
      },
      /**
       * @description
       * @param {any} valDark
       */
      changeDark(valDark) {
        this.dark = valDark
      },
      /**
       * @description
       * @param {Boolean} valDrawer
       */
      changeDrawer(valDrawer) {
        this.drawer = valDrawer
      }
    },
    computed: {
      progress: {
        /**
         * @description
         * @returns {any}
         */
        get() {
          return this.$store.state.Main.progress
        }
      }
    }
  }
</script>