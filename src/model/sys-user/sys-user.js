/*
 * @Author: 吴占超
 * @Date: 2018-06-04 16:54:01
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-21 10:14:37
 * SysUser model
 */
import Property from '../property'
import TextAttribute from '../attribute/text-attribute'
import SelAttribute from '../attribute/sel-attribute'
import {
  ConstFormType,
  ConstValidate
} from '../const-name'
import SysDepartment from '../../api/restful/sys-department'
import getSingleton from '../../design-pattern/singleton'
import ModelBase from '../../base-helper/model-base'
import RestfulSysUser from '../../api/restful/sys-user'

/**
 * 部门工厂
 */
const sysDepartmentServices = getSingleton(function () {
  return new SysDepartment()
})

export default class SysUser extends ModelBase {
  constructor() {
    super(function() {
      return new RestfulSysUser()
    })
    // #region 用户名
    this.userName = new Property({
      name: 'userName',
      rules: [
        v => !!v || `${window.vm.$t('userName')}-${window.vm.$t(ConstValidate.REQUIRED)}`,
        v => (v && v.length <= 50) || `${window.vm.$t('userName')}-${window.vm.$t(ConstValidate.MAXLENGTH)}`
      ],
      required: true
    })
    // #endregion
    // #region 用户编码
    this.userCode = new Property({
      name: 'userCode',
      rules: [
        v => !!v || `${window.vm.$t('userCode')}-${window.vm.$t(ConstValidate.REQUIRED)}`,
        v => (v && v.length <= 50) || `${window.vm.$t('userCode')}-${window.vm.$t(ConstValidate.MAXLENGTH)}`
      ],
      required: true
    })
    // #endregion
    // #region 用户状态
    this.userState = new Property({
      name: 'userState',
      rules: [
        v => !!v || `${window.vm.$t('userState')}-${window.vm.$t(ConstValidate.REQUIRED)}`
      ],
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        items: [{
          value: 1,
          text: '启用'
        }, {
          value: 2,
          text: '停用'
        }]
        // multiple: true
      }),
      required: true
    })
    // #endregion
    // #region 用户部门
    let userProDepartment = new Property({
      name: 'userDepartment',
      rules: [
        v => (!!v && v.length > 0) || `${window.vm.$t('userDepartment')}-${window.vm.$t(ConstValidate.REQUIRED)}`
      ],
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        multiple: true,
        cacheItem: true,
        itemText: 'departmentName',
        itemValue: 'id'
      }),
      required: true
    })
    userProDepartment.SelAttribute.GetAsync = async function (val) {
      userProDepartment.SelAttribute.Loading = true
      userProDepartment.SelAttribute.Items = await sysDepartmentServices().getSysDepartmentSelect(val)
      userProDepartment.SelAttribute.Loading = false
    }
    this.userDepartment = userProDepartment
    // #endregion
    // #region 备注
    this.remark = new Property({
      name: 'remark',
      textAttribute: new TextAttribute({
        // box: true,
        clearable: true,
        counter: 50
        // mask: TextAttribute.CONST_MASK.DATE_WITH_TIME
        // prefix: '$'
      })
    })
    // #endregion
    // 最后登陆日期
    this.lastLoginTime = new Property({
      name: 'lastLoginTime',
      type: ConstFormType.DATE,
      readonly: true
    })
    // 修改日期
    this.lastUpdate = new Property({
      name: 'lastUpdate',
      type: ConstFormType.DATE,
      readonly: true
    })
    // 测试
    let ceshi = new Property({
      name: 'ceshi',
      rules: [
        v => (!!v && v.length > 0) || `${window.vm.$t('ceshi')}-${window.vm.$t(ConstValidate.REQUIRED)}`
      ],
      type: ConstFormType.SELECTS,
      selAttribute: new SelAttribute({
        multiple: true,
        cacheItem: true,
        itemText: 'departmentName',
        itemValue: 'id'
      }),
      required: true
    })
    ceshi.SelAttribute.GetAsync = async function (val) {
      ceshi.SelAttribute.Loading = true
      ceshi.SelAttribute.Items = await sysDepartmentServices().getDemo(val)
      ceshi.SelAttribute.Loading = false
    }
    this.ceshi = ceshi
  }
}
