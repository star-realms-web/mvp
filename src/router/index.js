
import { createRouter, createWebHistory } from 'vue-router';
import BoardView from '../views/BoardView.vue';

const routerOptions = {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'board',
            component: BoardView,
        },
    ],
};

const router = createRouter(routerOptions);

export default router;
