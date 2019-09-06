import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
Vue.config.productionTip = false
Vue.use(Mint)
router.beforeEach((to,from,next)=>{
	// from 当前导航即将离开的这个路由,第一次是null
		// to是即将进入的路由 也就是回撤后的路由
		// next是一个函数,必须调用 否则就终端了路由的跳转
		console.log(from)
		document.title=to.meta.title
			next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
