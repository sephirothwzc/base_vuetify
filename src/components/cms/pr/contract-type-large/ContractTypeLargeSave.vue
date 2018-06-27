<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit.vue'
import ContractTypeLargeSaveVM from '../../../../model/cms/pr/contract-type-large/contract-type-large-save-vm.js'
/**
 * 合同大类新增、修改
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new ContractTypeLargeSaveVM()
    }
  }
}
</script>

<style scoped>
</style>