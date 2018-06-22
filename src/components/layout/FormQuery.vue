<template>
    <v-subheader>{{ $t('querySubheader') }}</v-subheader>
    <v-layout row wrap>
        <v-flex xs12 sm6 lg4 xl3 v-for="property in queryModel" :key="property.Name">
            <template v-if="property.Type === constFormType.TEXT">
                <v-text-field :prefix="property.textAttribute.Prefix" :counter="property.textAttribute.Counter" :clearable="property.textAttribute.Clearable" :box="property.textAttribute.Box" :mask="property.textAttribute.Mask" v-model="formObject[property.Name]" :rules="property.Rules" :label="$t(property.Name)" :required="property.Required" :textarea="property.textAttribute.textarea"></v-text-field>
            </template>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: {
    /**
     * 查询对象
     */
    queryModel: {
      type: Object,
      required: true
    }
  },
  data() {
      return {
          queryObject: {}
      }
  }
}
</script>

<style scoped>
</style>