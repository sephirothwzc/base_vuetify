<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import TermTypeQueryVM from '../../../../model/cms/pr/term-type/term-type-query-vm'
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
      queryModel: new TermTypeQueryVM()
    }
  }
}
</script>

<style scoped>
</style>