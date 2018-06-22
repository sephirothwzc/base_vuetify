/*
 * @Author: 吴占超
 * @Date: 2018-06-04 14:10:32
 * @Last Modified by: 吴占超
 * @Last Modified time: 2018-06-14 13:17:13
 * router 注册组件
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/layout/Main'
import useRouter from '@/router/use-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'home',
  redirect: '/home',
  component: Main,
  children: [{
    path: 'home',
    name: 'HelloWorld',
    component: HelloWorld
  }]
}, ...useRouter]

const vueRouter = new Router({
  routes
})

export default vueRouter
