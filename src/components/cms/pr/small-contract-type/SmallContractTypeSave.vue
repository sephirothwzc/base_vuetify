<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit.vue'
import SmallContractTypeSaveVM from '../../../../model/cms/pr/small-contract-type/small-contract-type-save-vm.js'
/**
 * 合同小类新增、修改
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new SmallContractTypeSaveVM()
    }
  }
}
</script>

<style scoped>
</style>