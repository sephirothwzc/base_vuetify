<template>
  <v-card>
    <v-subheader>{{ $t('querySubheader') }}</v-subheader>
    <v-form ref="form">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 lg4 xl3 v-for="property in propertyFilter" :key="property.Name">
            <template v-if="property.Type === constFormType.TEXT">
              <v-text-field :prefix="property.textAttribute.Prefix" :counter="property.textAttribute.Counter" :clearable="property.textAttribute.Clearable" :box="property.textAttribute.Box" :mask="property.textAttribute.Mask" v-model="queryObject[property.Name]" :rules="property.Rules" :label="$t(property.Name)" :required="property.Required" :textarea="property.textAttribute.textarea"></v-text-field>
            </template>
            <template v-if="property.Type === constFormType.DATE">
              <v-menu :ref="property.Name" :close-on-content-click="false" v-model="queryObject[property.Name+ 'DateShow']" :nudge-right="40" :return-value.sync="queryObject[property.Name]" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
                <v-text-field slot="activator" v-model="queryObject[property.Name]" :label="$t(property.Name)" prepend-icon="event" readonly></v-text-field>
                <v-date-picker v-model="queryObject[property.Name]" type="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="queryObject[property.Name+ 'DateShow'] = false" v-text="$t('no')"></v-btn>
                  <v-btn flat color="primary" @click="datetimeSave(property.Name)" v-text="$t('yes')"></v-btn>
                </v-date-picker>
              </v-menu>
            </template>

            <template v-if="property.Type === constFormType.SELECTS">
              <v-select :items="property.SelAttribute.Items" :rules="property.Rules" :multiple="property.SelAttribute.Multiple" v-model="queryObject[property.Name]" :label="$t(property.Name)" :required="property.Required" :cache-items="property.SelAttribute.CacheItem" :search-input.sync="search[property.Name]" :loading="property.SelAttribute.Loading" :item-text="property.SelAttribute.ItemText" :item-value="property.SelAttribute.ItemValue" :autocomplete="property.SelAttribute.CacheItem" chips>
              </v-select>
            </template>

            <template v-if="property.Type === constFormType.SWITCH">
              <v-switch :label="`${$t(property.Name)}: ${$t(queryObject[property.Name]?'true':'false')}`" v-model="queryObject[property.Name]"></v-switch>
            </template>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-btn @click="btnQueryClick" v-text="$t('query')"></v-btn>
          <v-btn @click="btnRestClick" v-text="$t('rest')"></v-btn>
        </v-layout>
      </v-container>
    </v-form>
    <v-subheader>{{ $t('queryResult') }}</v-subheader>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 lg12 xl12>
          <v-data-table :headers="tableHeaders" 
          :items="desserts" 
          :pagination.sync="pagination" 
          :total-items="totalDesserts" 
          :loading="loading" 
          class="elevation-1" 
          :item-key="queryModel.queryTable.Key"
          v-model="selected">
            <template slot="items" slot-scope="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
                </td>
                <td v-for="col in tableColumn" :key="col.value" :class="col.align">{{props.item[col.value]}}</td>
              </tr>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { ConstFormType } from '../../model/const-name.js'
import Property from '../../model/property.js'
import jslinq from 'jslinq'
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
      // 查询条件对象
      queryObject: {},
      constFormType: ConstFormType,
      // 下拉选择用数据源
      selItems: {},
      // 下拉输入模糊匹配
      search: {},
      // 新旧值判断
      oldSearch: {},
      selLoading: {},
      // 分页数据跟踪
      pagination: {
        descending: false,
        page: 0,
        rowsPerPage: 10,
        totalItems: 0
      },
      // 数据源item
      desserts: [],
      // 加载loading
      loading: false,
      // 总行数
      totalDesserts: 0,
      // 列表表头
      tableHeaders: [],
      // 列表列
      tableColumn: [],
      selected: []
    }
  },
  computed: {
    /**
     * 过滤生成查询条件
     */
    propertyFilter() {
      return jslinq(Object.keys(this.queryModel))
        .where(
          p =>
            this.queryModel[p] instanceof Property &&
            !this.queryModel[p].Primary
        )
        .select(p => this.queryModel[p])
        .toList()
    }
  },
  mounted() {
    let tableheaders = jslinq(this.queryModel.queryTable.Headers)
      .select(p => {
        return {
          text: p.Title,
          value: p.Field,
          sortable: p.Sortable,
          align: 'center'
        }
      })
      .toList()

    this.tableHeaders = [
      { text: '选择', value: this.queryModel.queryTable.Key, align: 'center' },
      ...tableheaders
    ]
    this.tableColumn = jslinq(this.queryModel.queryTable.Headers)
      .select(p => {
        return {
          align: `text-xs-${p.Align}`,
          value: p.Field
        }
      })
      .toList()
  },
  methods: {
    /**
     * 查询
     */
    async btnQueryClick() {
      this.pagination.page = 1
    },
    /**
     * 重置
     */
    btnRestClick() {
      this.$refs.form.reset()
    },
    /**
     * 根据查询、分页加载数据
     */
    async getDataFromApi() {
      this.loading = true
      // 获取分页参数
      // const { sortBy, descending, page, rowsPerPage } = this.pagination
      let pageParam = {}
      Object.assign(pageParam, this.queryObject, this.pagination)
      this.queryModel.RestfulApi.get(pageParam)
        .then(resoult => {
          this.desserts = resoult.list
          this.totalDesserts = resoult.total
        })
        .catch(error => {
          console.log(error)
          this.loading = 'error'
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  watch: {
    pagination: {
      handler() {
        if (!this.loading && this.pagination.page > 0) this.getDataFromApi()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
</style>