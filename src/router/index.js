import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import aboutPage from '../views/about-page.vue'
import toyApp from '../views/toy-app.vue'
import dashboardPage from '../views/dashboard-page.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
    history: createWebHashHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: homePage
        },
        {
            path: '/about',
            name: 'about',
            component: aboutPage
        },
        {
            path: '/toy',
            name: 'toy-app',
            component: toyApp,
        },
        {
            path: '/dashboard',
            name: 'dashboard-page',
            component: dashboardPage,
        },
        {
            path: '/toy/:toyId',
            component: toyDetails
        },
        {
            path: '/toy/edit/:toyId?',
            name: 'toy-edit',
            component: toyEdit
        },
    ]
})

export default router