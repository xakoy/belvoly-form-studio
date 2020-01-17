import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Studio from './package/studio'y

// import { fieldPlugin } from '@/components/plugins'
// Studio.use(fieldPlugin, { name: 'number' })

// import Radio from './components/controls/radio'
// Studio.use({
//     install: (studio, options) => {
//         studio.control(Radio)
//     }
// })

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
