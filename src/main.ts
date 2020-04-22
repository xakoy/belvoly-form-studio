import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BFS from './package'
import complex from './views/components/complex'
BFS.Studio.control(complex)

Vue.use(BFS, { isUseDefaultControls: false })

// import { fieldTextPlugin, fieldNamePlugin } from './package/plugins'

// BFS.Studio.use(fieldNamePlugin)
// BFS.Studio.use(fieldTextPlugin)

// Studio.use(fieldPlugin, { name: 'number' })

// import Radio from './components/controls/radio'
// Studio.use({
//     install: (studio, options) => {
//         studio.control(Radio)
//     }
// })
import './common/filters/log'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
