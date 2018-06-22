<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import FromQuery from '../../../layout/FormQuery'
import LargeContractTypeQueryVM from '../../../../model/cms/pr/large-contract-type/large-contract-type-query-vm'

export default {
  components: {
    'form-query': FromQuery
  },
  data() {
    return {
      queryModel: new LargeContractTypeQueryVM()
    }
  }
}
</script>

<style scoped>
</style>