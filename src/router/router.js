import { createRouter, createWebHistory } from 'vue-router'
import Settings from "@/views/Settings.vue";
import About from "@/views/About.vue";
import MyAccount from "@/components/menuItems/MyAccount.vue";
import ApiKeys from "@/components/menuItems/ApiKeys.vue";
import Sessions from "@/components/menuItems/Sessions.vue";
import Socials from "@/components/menuItems/Socials.vue";
import Tariffs from "@/components/menuItems/Tariffs.vue";
import Friends from "@/components/menuItems/Friends.vue";
import Security from "@/components/menuItems/Security.vue";
import Notifications from "@/components/menuItems/Notifications.vue";
import Wallet from "@/components/menuItems/Wallet.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
    [
        {
            path: '/',
            name: 'about',
            component: About
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
                    component: MyAccount
                },
                {
                    path: 'api-keys',
                    name: 'api-keys',
                    component: ApiKeys
                },
                {
                    path: 'sessions',
                    name: 'sessions',
                    component: Sessions
                },
                {
                    path: 'socials',
                    name: 'socials',
                    component: Socials
                },
                {
                    path: 'tariffs',
                    name: 'tariffs',
                    component: Tariffs
                },
                {
                    path: 'friends',
                    name: 'friends',
                    component: Friends
                },
                {
                    path: 'security',
                    name: 'security',
                    component: Security
                },
                {
                    path: 'notifications',
                    name: 'notifications',
                    component: Notifications
                },
                {
                    path: 'wallet',
                    name: 'wallet',
                    component: Wallet
                }
            ]
        }
    ]
})

export default router
