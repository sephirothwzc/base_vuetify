<template>
    <form-edit :formModel="formModel"></form-edit>
</template>

<script>
import FormEdit from '../../../layout/FormEdit'
import TermTypeSaveVM from '../../../../model/cms/pr/term-type/term-type-save-vm'
/**
 * 条款类型新增、修改
 */
export default {
  components: {
    'form-edit': FormEdit
  },
  data() {
    return {
      formModel: new TermTypeSaveVM()
    }
  }
}
</script>

<style scoped>
</style>