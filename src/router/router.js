import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
    [
        {
            path: '/',
            name: 'about',
            component: () => import("@/views/About.vue")
        },
        {
            path: '/settings',
            name: 'settings',
            component: () => import("@/views/Settings.vue"),
            children:
            [
                {
                    path: 'my-account',
                    name: 'my-account',
                    component: () => import("@/components/menuItems/myAccount/MyAccount.vue")
                },
                {
                    path: 'api-keys',
                    name: 'api-keys',
                    component: () => import("@/components/menuItems/apiKeys/ApiKeys.vue")
                },
                {
                    path: 'sessions',
                    name: 'sessions',
                    component: () => import("@/components/menuItems/sessions/Sessions.vue")
                },
                {
                    path: 'socials',
                    name: 'socials',
                    component: () => import("@/components/menuItems/socials/Socials.vue")
                },
                {
                    path: 'tariffs',
                    name: 'tariffs',
                    component: () => import("@/components/menuItems/tariffs/Tariffs.vue")
                },
                {
                    path: 'friends',
                    name: 'friends',
                    component: () => import("@/components/menuItems/Friends.vue")
                },
                {
                    path: 'security',
                    name: 'security',
                    component: () => import("@/components/menuItems/Security.vue")
                },
                {
                    path: 'notifications',
                    name: 'notifications',
                    component: () => import("@/components/menuItems/Notifications.vue")
                },
                {
                    path: 'wallet',
                    name: 'wallet',
                    component: () => import("@/components/menuItems/Wallet.vue")
                }
            ]
        }
    ]
})

export default router
