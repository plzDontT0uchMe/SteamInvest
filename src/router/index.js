import { createRouter, createWebHistory } from 'vue-router'
import Settings from "@/views/Settings.vue";
import SettingsItem from "@/components/SettingsItem.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
    [
        {
            path: '/',
            name: 'home',
            component: SettingsItem
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
