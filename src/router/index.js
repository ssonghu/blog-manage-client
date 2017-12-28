import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
      // component: (resolve) => { require(['@/components/Login'], resolve) }
    },
    {
      path: '/',
      name: 'Main',
      component: (resolve) => { require(['@/components/Main'], resolve) },
      meta: { requireAuth: true },//需要验证
      redirect: {path: '/home'}, //默认路径
      children:[
        { path: '/home', name: 'Home', component: (resolve) => { require(['@/components/pages/Home'], resolve) } },
        { path: '/articleList', name: 'ArticleList', component: (resolve) => { require(['@/components/pages/article/ArticleList'], resolve) } },
        { path: '/releaseArticle', name: 'ReleaseArticle', component: (resolve) => { require(['@/components/pages/article/ReleaseArticle'], resolve) } }
      ]
    }
  ]
})
