import Vue from 'vue'
import DateHelper from '../utils/date-helper.js'

Vue.filter('formatTimeStamp', DateHelper.formatTimeStamp)
Vue.filter('formatDate', DateHelper.formatDate)
