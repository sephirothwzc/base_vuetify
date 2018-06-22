<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit.vue'
import SmallContractTypeSaveVC from '../../../../model/cms/pr/small-contract-type/small-contract-type-save-vc.js'
/**
 * 合同小类新增、修改
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new SmallContractTypeSaveVC()
    }
  }
}
</script>

<style scoped>
</style>