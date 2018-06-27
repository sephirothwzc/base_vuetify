<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import FromQuery from '../../../layout/FormQuery'
import ReceiveContractQueryVM from '../../../../model/cms/ar/receive-contract/receive-contract-query-vm'

export default {
  components: {
    'form-query': FromQuery
  },
  data() {
    return {
      queryModel: new ReceiveContractQueryVM()
    }
  }
}
</script>

<style scoped>
</style>