<template>
  <form-edit :formModel="formModel"></form-edit>
</template>

<script>
  import FormEdit from '../../../components/layout/FormEdit'
  import ModelSysUser from '../../../model/sys-user/sys-user'
  /**
   * 用户新增、修改
   */
  export default {
    components: {
      'form-edit': FormEdit
    },
    data() {
      return {
        formModel: new ModelSysUser()
      }
    }
  }
</script>

<style scoped>

</style>