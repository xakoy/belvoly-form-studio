import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerPlugin, registerGlobalPlugin } from '@/components/controls'
import { FieldPropertyControlPlugin } from '@/components/plugins'

// registerPlugin('text', new FieldPropertyControlPlugin())
registerGlobalPlugin(new FieldPropertyControlPlugin())

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
