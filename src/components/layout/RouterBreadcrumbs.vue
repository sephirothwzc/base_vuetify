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
    refashBre(path) {
      if (!(path instanceof String)) return path
      return jslinq(path.split('/'))
        .where(p => p !== '')
        .select(p => this.$t(p))
        .toList()
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