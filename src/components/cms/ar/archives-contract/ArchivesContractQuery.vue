<template>
  <form-query :queryModel="queryModel"></form-query>
</template>

<script>
import FromQuery from '../../../layout/FormQuery'
import ArchivesContractQueryVM from '../../../../model/cms/ar/archives-contract/archives-contract-query-vm'

export default {
  components: {
    'form-query': FromQuery
  },
  data() {
    return {
      queryModel: new ArchivesContractQueryVM()
    }
  }
}
</script>

<style scoped>
</style>