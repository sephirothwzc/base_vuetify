<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import ContractTypeSmallQueryVM from '../../../../model/cms/pr/contract-type-small/contract-type-small-query-vm'
import FormQuery from '../../../layout/FormQuery'
/**
 * 合同小类查询
 */
export default {
  components: {
    'form-query': FormQuery
  },
  data() {
    return {
      queryModel: new ContractTypeSmallQueryVM()
    }
  }
}
</script>

<style scoped>
</style>