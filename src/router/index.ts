import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../components/HomePage.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
import Question from "../components/Question.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/questions',
        name: 'Questions',
        component: Question
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