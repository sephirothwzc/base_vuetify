/*
 * @Author: 武彩平
 * @Date: 2018-06-23 09:21:01
 * @Last Modified by: 武彩平
 * @Last Modified time: 2018-06-23 15:15:13
 */

import ModelBase from '../../../../base-helper/model-base'
import RestfulTermType from '../../../../api/restful/cms/pr/term-type/restful-term-type'
import Property from '../../../property'
import { ConstValidate, ConstFormType } from '../../../const-name'
import TextAttribute from '../../../attribute/text-attribute'
import SelAttribute from '../../../attribute/sel-attribute'

/**
 *条款类型增加、修改
 *
 * @export
 * @class TermTypeSaveVM
 * @extends {ModelBase}
 */
export default class TermTypeSaveVM extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulTermType()
    })
    // #region 对象属性初始化
    // #region termTypeId 条款类型主键ID
    this.termTypeId = new Property({
      name: 'termTypeId',
      primary: true
    })
    // #endregion termTypeId 条款类型主键ID
    // #region termTypeCode 条款类型编号
    this.termTypeCode = new Property({
      name: 'termTypeCode',
      rules: [
        v =>
          !!v ||
          `${window.vm.$t('termTypeCode')}-${window.vm.$t(
            ConstValidate.REQUIRED
          )}`,
        v =>
          (v && v.length <= 20) ||
          `${window.vm.$t('termTypeCode')}-${window.vm.$t(
            ConstValidate.MAXLENGTH
          )}`
      ],
      required: true,
      textAttribute: new TextAttribute({
        counter: 20
      })
    })
    // #endregion termTypeCode 条款类型编号
    // #region termTypeName 条款类型名称
    this.termTypeName = new Property({
      name: 'termTypeName',
      rules: [
        v =>
          !!v ||
          `${window.vm.$t('termTypeName')}-${window.vm.$t(
            ConstValidate.REQUIRED
          )}`,
        v =>
          (v && v.length <= 50) ||
          `${window.vm.$t('termTypeName')}-${window.vm.$t(
            ConstValidate.MAXLENGTH
          )}`
      ],
      required: true
    })
    // #endregion 条款类型名称
    // #region enableFlag 是否有效
    this.enableFlag = new Property({
      name: 'enableFlag',
      type: ConstFormType.SELECTS,
      defaultValue: 1,
      selAttribute: new SelAttribute({
        items: [
          {
            value: 1,
            text: window.vm.$t('true')
          },
          {
            value: 0,
            text: window.vm.$t('false')
          }
        ]
      })
    })
    // #endregion enableFlag 是否有效
    // #region memo 备注
    this.memo = new Property({
      name: 'memo',
      textAttribute: new TextAttribute({
        counter: 200,
        textarea: true
      })
    })
    // #endregion memo 备注
    // #endregion 对象属性初始化
  }
}
