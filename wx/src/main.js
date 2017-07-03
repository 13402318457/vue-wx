import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import message from './components/message.vue'
import message01 from './components/message01.vue'
import noChat from './components/noChat.vue'
const router = new VueRouter({
	routes:[
		{path:'/',redirect:'/message'},		
		{path:'/message',components:{userLi:message,hasNoChat:noChat}},
		{path:'/message/:username',components:{userLi:message,userMessage:message01}}
	]
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})