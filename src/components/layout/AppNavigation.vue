<template>
  <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="toDrawer" enable-resize-watcher fixed app>
    <div class="pa-3 text-xs-center">
      <div class="display-2 py-4">
        {{$t('appTitle')}}
      </div>
      <div style="padding-left:5em">
        <v-switch @change="changeDark" :label="(!dark ? $t('light'): $t('dark'))" v-model="dark" hide-details></v-switch>
      </div>
    </div>
    <hr class="divider">
    <v-list>
      <v-list-group v-for="item in navItems" v-model="item.active" :key="item.id" :prepend-icon="item.icon" no-action>
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title v-text="$t(item.name)"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile v-for="(citem, i) in item.children" :key="i" @click="listTitleClick(item, citem)"> -->
        <v-list-tile v-for="(citem, i) in item.children" :key="i" :to="`${item.patch}/${citem.patch}`">
          <v-list-tile-action>
            <v-icon v-html="citem.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t(citem.name)"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="" scoped>

</style>

<script>
  import RestfulLayout from '../../api/restful/layout'
  import getSingleton from '../../design-pattern/singleton.js'
  const RestfulLayoutServices = getSingleton(function() {
    return new RestfulLayout()
  })
  /**
   * 侧边栏导航
   */
  export default {
    props: {
      miniVariant: {
        type: Boolean,
        required: true
      },
      clipped: {
        type: Boolean,
        required: true
      },
      drawer: {
        type: Boolean,
        required: true
      }
    },
    /**
     * @description
     * @returns {any}
     */
    data() {
      return {
        /**
         * 样式控制
         */
        dark: false,
        toDrawer: true,
        navItems: [{
          icon: 'bubble_chart',
          title: '系统设置'
        }]
      }
    },
    mounted() {
      RestfulLayoutServices().getNavigation().then(data => {
        this.navItems = data
      })
    },
    methods: {
      /**
       * @description 切换主题
       */
      changeDark() {
        this.$emit('changeDark', this.dark)
      },
      /**
       * @description 切换导航隐藏
       */
      changeDrawer() {
        this.$emit('changeDrawer', this.toDrawer)
      },
      /**
       * @description 导航点击事件
       */
      listTitleClick(navItem, childrenItem) {
        this.$router.push({
          path: `${navItem.patch}/${childrenItem.patch}`
        })
      }
    },
    watch: {
      /**
       * @description
       * @param {any} val
       * @param {any} oldval
       */
      toDrawer(val, oldval) {
        this.changeDrawer()
      },
      /**
       * @description
       * @param {any} val
       * @param {any} oldval
       */
      drawer(val, oldval) {
        this.toDrawer = val
      }
    }
  }
</script>