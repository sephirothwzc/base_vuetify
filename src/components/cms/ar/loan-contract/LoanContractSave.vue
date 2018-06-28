<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit'
import LoanContractSaveVM from '../../../../model/cms/ar/loan-contract/loan-contract-save-vm'
/**
 * 借出
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new LoanContractSaveVM()
    }
  }
}
</script>

<style scoped>
</style>