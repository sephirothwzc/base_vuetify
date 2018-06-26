<template>
  <v-form v-model="valid" ref="form">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg4 xl3 v-for="property in propertyFilter" :key="property.Name">
          <template v-if="property.Type === constFormType.TEXT">
            <v-text-field :prefix="property.textAttribute.Prefix" :counter="property.textAttribute.Counter" :clearable="property.textAttribute.Clearable" :box="property.textAttribute.Box" :mask="property.textAttribute.Mask" v-model="formObject[property.Name]" :rules="property.Rules" :label="$t(property.Name)" :required="property.Required" :textarea="property.textAttribute.textarea"></v-text-field>
          </template>

          <template v-if="property.Type === constFormType.DATE">
            <v-menu :ref="property.Name" :close-on-content-click="false" v-model="formObject[property.Name+ 'DateShow']" :nudge-right="40" :return-value.sync="formObject[property.Name]" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
              <v-text-field slot="activator" v-model="formObject[property.Name]" :label="$t(property.Name)" prepend-icon="event" readonly></v-text-field>
              <v-date-picker v-model="formObject[property.Name]" type="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="formObject[property.Name+ 'DateShow'] = false" v-text="$t('no')"></v-btn>
                <v-btn flat color="primary" @click="datetimeSave(property.Name)" v-text="$t('yes')"></v-btn>
              </v-date-picker>
            </v-menu>
          </template>

          <template v-if="property.Type === constFormType.SELECTS">
            <v-select :items="property.SelAttribute.Items" :rules="property.Rules" :multiple="property.SelAttribute.Multiple" v-model="formObject[property.Name]" :label="$t(property.Name)" :required="property.Required" :cache-items="property.SelAttribute.CacheItem" :search-input.sync="search[property.Name]" :loading="property.SelAttribute.Loading" :item-text="property.SelAttribute.ItemText" :item-value="property.SelAttribute.ItemValue" :autocomplete="property.SelAttribute.CacheItem" chips>
            </v-select>
          </template>

          <template v-if="property.Type === constFormType.SWITCH">
            <v-switch :label="`${$t(property.Name)}: ${$t(formObject[property.Name]?'true':'false')}`" v-model="formObject[property.Name]"></v-switch>
          </template>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-btn @click="btnSubmitClick" v-text="$t('yes')"></v-btn>
        <v-btn @click="btnClearClick" v-text="$t('no')"></v-btn>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { ConstFormType } from '../../model/const-name.js'
import Property from '../../model/property.js'
import jslinq from 'jslinq'
import Dialog from '../../components/dialog/index'

export default {
  props: {
    formModel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      valid: false,
      formObject: {},
      constFormType: ConstFormType,
      selItems: {},
      search: {},
      oldSearch: {},
      selLoading: {}
    }
  },
  computed: {
    /**
     * 入参过滤，只有Property属性才需要生成控件
     */
    propertyFilter() {
      return jslinq(Object.keys(this.formModel))
        .where(
          p =>
            this.formModel[p] instanceof Property && !this.formModel[p].Primary
        )
        .select(p => this.formModel[p])
        .toList()
    }
  },
  mounted() {
    // 设置默认值
    if (this.$route.params && this.$route.params.id) {
      this.pagePutInit(this.$route.params.id)
    } else {
      this.pageSettingDefaultValue()
    }
  },
  methods: {
    /**
     * 修改页面 ajax 加载
     */
    async pagePutInit(id) {
      this.formObject = await this.formModel.RestfulApi.getById(id)
    },
    /**
     * 新增状态设置页面初始值
     */
    pageSettingDefaultValue() {
      jslinq(Object.keys(this.formModel))
        .where(
          p =>
            this.formModel[p] instanceof Property &&
            this.formModel[p].DefaultValue
        )
        .select(p => {
          this.$set(this.formObject, p, this.formModel[p].DefaultValue)
        })
    },
    /**
     * 时间控件异步保存值
     */
    datetimeSave(name) {
      this.$refs[name][0].save(this.formObject[name])
    },
    /**
     * 保存事件
     */
    async btnSubmitClick() {
      if (!this.$refs.form.validate()) {
        return
      }
      let resoult =
        this.$route.params && this.$route.params.id
          ? await this.formModel.RestfulApi.put(this.formObject)
          : this.formModel.RestfulApi.post(this.formObject)
      if (resoult) {
        Dialog.messageShow({
          title: `${this.$t('msgtitle')}`,
          content: `${this.$t('save')}${this.$t('success')}`
        })
      }
    },
    /**
     * 取消事件
     */
    btnClearClick() {
      // this.$refs.form.reset()
      this.$router.go(-1)
    }
  },
  watch: {
    /**
     * 异步下拉选择跟踪
     */
    search: {
      handler(newValue) {
        const pros = Object.keys(newValue)
        for (let i = 0; i < pros.length; i++) {
          this.oldSearch[pros[i]] === newValue[pros[i]] ||
            !newValue[pros[i]] ||
            this.formModel[pros[i]].SelAttribute.GetAsync(newValue[pros[i]])
        }
        this.oldSearch = { ...newValue }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
</style>