<template>
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item v-for="item in routerItems" :key="item">
      {{ item }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
  import jslinq from 'jslinq'
  export default {
    methods: {
      refashBre() {
        return jslinq(this.$route.matched).select(p => this.$t(p.name)).toList()
      }
    },
    computed: {
      routerItems: {
        get() {
          return this.refashBre(this.$store.state.Router.matched)
        }
      }
    }
  }
</script>

<style scoped>

</style>