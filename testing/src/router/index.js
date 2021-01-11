import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Main from '../views/Main.vue'
import Sendprice from '../views/Send-price'
import Sendapplication from '../views/Send-application'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/main',
        name: 'Main',
        component: Main
    },
    {
        path: '/send-price',
        name: 'Sendprice',
        component: Sendprice
    }, {
        path: '/send-application',
        name: 'Sendapplication',
        component: Sendapplication
    }, {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

export default router
