<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit.vue'
import LargeContractTypeSaveVM from '../../../../model/cms/pr/large-contract-type/large-contract-type-save-vm.js'
/**
 * 合同大类新增、修改
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new LargeContractTypeSaveVM()
    }
  }
}
</script>

<style scoped>
</style>