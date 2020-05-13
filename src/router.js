import Vue from 'vue'
import VueRouter from 'vue-router'
import News from './components/News.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/news',
            component: News
        },
        {
            path: '/news/:type',
            component: News,
            props: true
        },
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
})
export default router;