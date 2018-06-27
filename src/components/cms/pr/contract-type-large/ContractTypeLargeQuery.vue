<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import FromQuery from '../../../layout/FormQuery'
import ContractTypeLargeQueryVM from '../../../../model/cms/pr/contract-type-large/contract-type-large-query-vm'

export default {
  components: {
    'form-query': FromQuery
  },
  data() {
    return {
      queryModel: new ContractTypeLargeQueryVM()
    }
  }
}
</script>

<style scoped>
</style>