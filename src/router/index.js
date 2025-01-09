import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Direction from '../views/DirectionView.vue'
import DirectionPhoto from '../views/PhotoView.vue'
import VideoEssay from '../views/EssayView.vue'
import About from '../views/AboutView.vue'
import ProjectDetail from '@/components/ProjectDetail.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/direccion',
        name: 'direction',
        component: Direction,
    },
    {
        path: '/direccion-fotografia',
        name: 'direction-photo',
        component: DirectionPhoto,
    },
    {
        path: '/video-ensayos',
        name: 'video-essay',
        component: VideoEssay,
    },
    {
        path: '/sobre-mi',
        name: 'About',
        component: About,
    },
    {
        path: "/project/:id",
        name: "ProjectDetail",
        component: ProjectDetail,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
