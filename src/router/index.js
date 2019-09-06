import Vue from 'vue'
import Router from 'vue-router'
// ---------------------------------
let Home=()=>import('@/components/home/Home')
let Shouye=()=>import('@/components/home/shouye')
let Wzry=()=>import('@/components/home/wzry')
let Jdqs=()=>import('@/components/home/jdqs')
let Yxlm=()=>import('@/components/home/yxlm')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
		  path: '/home',
		  name: 'home',
		  component: Home,
			children:[
			 {
			  path: '/home/shouye',
			  name: 'shouye',
			  component: Shouye
			},
			{
			  path: '/home/wzry',
			  name: 'wzry',
			  component: Wzry
			},
			{
			  path: '/home/jdqs',
			  name: 'jdqs',
			  component: Jdqs
			},
			{
			  path: '/home/yxlm',
			  name: 'yxlm',
			  component: Yxlm
			}
			]
			
		}
  ]
})
