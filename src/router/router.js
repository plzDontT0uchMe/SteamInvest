import { createRouter, createWebHistory } from 'vue-router'
import Settings from "@/views/Settings.vue";
import SettingsItem from "@/components/SettingsItem.vue";
import Home from "@/views/About.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
    [
        {
            path: '/',
            name: 'about',
            component: Home
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings,
            children:
            [
                {
                    path: 'my-account',
                    name: 'my-account',
                    component: SettingsItem
                },
                {
                    path: 'api-keys',
                    name: 'api-keys',
                    component: SettingsItem
                },
            ]
        }
    ]
})

export default router
