<template>
  <v-layout row justify-center>
    <v-dialog v-model="showDialog" persistent max-width="800">
      <v-card>
        <v-card-title>
          <!-- <v-btn flat icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" :label="labelSearch" single-line hide-details></v-text-field> -->
          <v-container fluid grid-list-lg>
            <v-layout>
              <v-flex xs12 sm6 lg6 xl6>
                <v-text-field v-model="codeText" :label="labelCode" single-line hide-details @keyup.enter="enterSearch"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 lg6 xl6>
                <v-text-field v-model="nameText" :label="labelText" single-line hide-details></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-spacer></v-spacer>
              <v-btn flat>
                <v-icon>search</v-icon>
                {{searchBtnText}}
              </v-btn>
              <v-btn flat>
                <v-icon>clear</v-icon>
                {{restBtnText}}
              </v-btn>
            </v-layout>
          </v-container>
          </v-container>
        </v-card-title>
        <v-container fluid grid-list-lg>
          <v-data-table :headers="tableHeaders" :items="desserts" :pagination.sync="pagination" :total-items="totalDesserts" :loading="loading" class="elevation-1" item-key="ctId" v-model="tbSelected">
            <template slot="items" slot-scope="props">
              <tr :active="props.selected" @click="props.selected = !props.selected">
                <td>
                  <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
                </td>
                <td class="text-xs-center">{{props.item.ctCode}}</td>
                <td class="text-xs-center">{{props.item.ctName}}</td>
                <td class="text-xs-center">{{props.item.versionNo}}</td>
              </tr>
            </template>
          </v-data-table>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="btnCancelClick">{{cancelBtnText}}</v-btn>
          <v-btn flat @click="btnOkClick">{{okBtnText}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import jslinq from 'jslinq'
import Dialog from './index'
import RestfulContractSearch from '../../api/restful/cms/si/contract-version/restful-contract-version'

export default {
  data() {
    return {
      restBtnText: window.vm.$t('rest'),
      searchBtnText: window.vm.$t('query'),
      okBtnText: window.vm.$t('yes'),
      cancelBtnText: window.vm.$t('no'),
      /**
       * 模糊查询lable
       */
      labelCode: window.vm.$t('ctCode'),
      labelText: window.vm.$t('ctName'),
      /**
       * 弹出
       */
      showDialog: true,
      /**
       * 查询文本
       */
      search: '',
      /**
       * 表头
       */
      tableHeaders: [
        {
          text: '选择',
          value: 'ctId',
          align: 'center'
        },
        {
          text: '合同编码',
          value: 'ctCode',
          align: 'center'
        },
        {
          text: '合同名称',
          value: 'ctName',
          align: 'center'
        },
        {
          text: '版本号',
          value: 'versionNo',
          align: 'center'
        }
      ],
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
      // 选中
      tbSelected: [],
      // 数据源对象
      codeText: '',
      nameText: ''
    }
  },
  methods: {
    btnClick(key) {
      this.showDialog = false
      // 如果你点击确定按钮，会使promise resolve, params可以在then中获取到
      this.$emit(key, this.$el)
    },
    /**
     * 确定按钮点击事件
     */
    btnOkClick() {
      if (this.tbSelected.length === 0) {
        return Dialog.messageShow({
          title: window.vm.$t('msgtitle'),
          content: window.vm.$t('searchError')
        })
      }
    },
    /**
     * 取消按钮点击事件
     */
    btnCancelClick() {
      this.btnClick('$cancel')
    },
    /**
     * 回车事件
     */
    enterInput() {
      console.log(this.codeText)
    },
    /**
     * 合同查询
     */
    contractSearch() {
      return RestfulContractSearch.get()
    }
  },
  watch: {
    // 选中 保持单选
    tbSelected: {
      handler() {
        if (this.tbSelected.length <= 1) return
        this.tbSelected = [jslinq(this.tbSelected).lastOrDefault()]
      },
      deep: true
    }
  }
}
</script>

<style scoped>
</style>