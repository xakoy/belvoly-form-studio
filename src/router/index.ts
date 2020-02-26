import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/design',
        name: 'design',
        component: () => import('../views/Index.vue')
    },
    {
        path: '/preview',
        name: 'preview',
        component: () => import('../views/Preview.vue')
    },
    {
        path: '/studio',
        component: () => import('../views/studio/Index.vue'),
        children: [
            {
                path: 'design',
                component: () => import('../views/studio/Design.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
