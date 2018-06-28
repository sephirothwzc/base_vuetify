<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit'
import ReceiveContractSaveVM from '../../../../model/cms/ar/receive-contract/receive-contract-save-vm'
/**
 * 收件
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new ReceiveContractSaveVM()
    }
  }
}
</script>

<style scoped>
</style>