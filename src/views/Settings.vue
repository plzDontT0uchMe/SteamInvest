<script setup>
import { ref } from "vue";

const menuItems = ref([
    {
        name: 'Мой аккаунт',
        component: 'my-account'
    },
    {
        name: 'API ключи',
        component: 'api-keys'
    },
    {
        name: 'Сессии',
        component: 'sessions'
    },
    {
        name: 'Социальные сети',
        component: 'socials'
    },
    {
        name: 'Тарифы',
        component: 'tariffs'
    },
    {
        name: 'Друзья',
        component: 'friends'
    },
    {
        name: 'Безопасность',
        component: 'security'
    },
    {
        name: 'Кошелёк',
        component: 'wallet'
    }
])
</script>

<template>
    <div class="flex justify-center items-center">
        <div class="flex justify-between flex-grow-[3] max-w-[900px] mt-10">
            <ul class="menu flex items-center w-[20%] h-full">
                <li class="w-full p-1" v-for="(item, index) in menuItems" :key="index">
                    <router-link class="flex justify-center items-center" :class="{ active: item.component === $route.name }" :to="{name: item.component}" > {{ item.name }} </router-link>
                </li>
            </ul>
            <router-view class="w-[75%] h-screen"></router-view>
        </div>
    </div>

</template>

<style scoped>

</style>