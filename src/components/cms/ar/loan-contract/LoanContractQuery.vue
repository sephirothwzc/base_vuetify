<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import FromQuery from '../../../layout/FormQuery'
import LoanContractQueryVM from '../../../../model/cms/ar/loan-contract/loan-contract-query-vm'

export default {
  components: {
    'form-query': FromQuery
  },
  data() {
    return {
      queryModel: new LoanContractQueryVM()
    }
  }
}
</script>

<style scoped>
</style>