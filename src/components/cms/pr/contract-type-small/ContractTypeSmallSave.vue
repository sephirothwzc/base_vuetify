<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit'
import ContractTypeSmallSaveVM from '../../../../model/cms/pr/contract-type-small/contract-type-small-save-vm'
/**
 * 合同小类新增、修改
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new ContractTypeSmallSaveVM()
    }
  }
}
</script>

<style scoped>
</style>