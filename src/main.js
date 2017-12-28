// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

//使用ElementUI
Vue.use(ElementUI)

//路由守卫
router.beforeEach((to, from, next) => {
  // to: 即将要进入的路由对象
  // from :当前导航正要离开的路由
  // next :一定要调用该方法来resolve这个钩子
  // console.log('in')
  if (to.path === '/login') {
    sessionStorage.removeItem('BIGDATA_PLATFORM')
  }
  // 判断进入的页面需不需要登录
  if (to.matched.some(res => res.meta.requireAuth)) {
    // console.log('需要登陆')
    if (sessionStorage.getItem('BIGDATA_PLATFORM')) {
      // console.log('已登陆')
      next()
      return false
    } else {
      // console.log('未登陆')
      next({ path: '/login' })
    }
  } else {
    // console.log('不需要验证的页面')
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
