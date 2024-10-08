import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../components/HomePage.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
import Questions from "../components/Questions.vue";
import Results from "../components/Results.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/questions',
        name: 'Questions',
        component: Questions
    },
    {
        path: '/results',
        name: 'Results',
        component: Results
    },
    {
        path: "/:pathMatch(.*)*",
        name: "not found",
        component: NotFoundPage
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {top: 0}
    }
})

export default router