<template>
  <v-card>
    <v-subheader>{{ $t('querySubheader') }}</v-subheader>
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
    <v-subheader>{{ $t('queryResult') }}</v-subheader>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 lg12 xl12>
          <v-data-table :headers="queryModel.Headers" :items="desserts" :search="queryModel.Search" :pagination.sync="pagination" :total-items="totalDesserts" :loading="loading" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.ctTypeCode }}</td>
              <td class="text-xs-right">{{ props.item.ctTypeName }}</td>
              <td class="text-xs-right">{{ props.item.shortName }}</td>
              <td class="text-xs-right">{{ props.item.enableFlag }}</td>
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
      pagination: {},
      // 数据源item
      desserts: [],
      // 加载loading
      loading: false,
      // 总行数
      totalDesserts: 0
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
  methods: {
    /**
     * 查询
     */
    async btnQueryClick() {
      this.getDataFromApi()
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
          this.desserts = resoult.items
          this.totalDesserts = resoult.totalAmount
        })
        .catch(error => {
          console.log(error)
          this.loading = 'error'
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
</style>