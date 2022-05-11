import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import NewArticle from '../views/NewArticle.vue'
import OneArticle from '../components/OneArticle.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: () => import('../views/AboutUs.vue')
    },
    {
        path: '/article/:id',
        component: OneArticle,
        props: (route) => store.state.articles.find((x) => x.id == route.params.id)
    },
    {
        path: '/new',
        name: 'NewArticle',
        component: NewArticle
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router