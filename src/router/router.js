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
                    redirect: {name: 'personalization'},
                    children:
                    [
                        {
                            path: 'personalization',
                            name: 'personalization',
                            component: () => import("@/components/menuItems/myAccount/personalization/Personalization.vue")
                        },
                        {
                            path: 'general-information',
                            name: 'general-information',
                            component: () => import("@/components/menuItems/myAccount/generalInformation/GeneralInformation.vue")
                        }
                    ]
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
                    component: () => import("@/components/menuItems/friends/Friends.vue")
                },
                {
                    path: 'security',
                    name: 'security',
                    component: () => import("@/components/menuItems/security/Security.vue")
                },
                {
                    path: 'notifications',
                    name: 'notifications',
                    component: () => import("@/components/menuItems/Notifications.vue")
                },
                {
                    path: 'wallet',
                    name: 'wallet',
                    redirect: {name: 'personalization'},
                    children:
                        [
                            {
                                path: 'replenish-balance',
                                name: 'replenish-balance',
                                component: () => import("@/components/menuItems/wallet/replenishBalance/ReplenishBalance.vue")
                            },
                            {
                                path: 'replenishment-history',
                                name: 'replenishment-history',
                                component: () => import("@/components/menuItems/wallet/replenishmentHistory/ReplenishmentHistory.vue")
                            }
                        ]
                }
            ]
        },
        {
            path: '/item/:market_hash',
            name: 'item',
            component: () => import("@/views/SteamMarketItem.vue")
        },
    ]
})

export default router
