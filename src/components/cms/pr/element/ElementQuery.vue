<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import FromQuery from '../../../layout/FormQuery'
import ElementQueryVM from '../../../../model/cms/pr/element/element-query-vm'

export default {
  components: {
    'form-query': FromQuery
  },
  data() {
    return {
      queryModel: new ElementQueryVM()
    }
  }
}
</script>

<style scoped>
</style>