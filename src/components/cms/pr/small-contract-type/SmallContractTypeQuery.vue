<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import SmallContractTypeQueryVM from '../../../../model/cms/pr/small-contract-type/small-contract-type-query-vm'
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
      queryModel: new SmallContractTypeQueryVM()
    }
  }
}
</script>

<style scoped>
</style>