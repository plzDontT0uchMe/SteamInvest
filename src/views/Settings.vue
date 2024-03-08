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
    }
])
</script>

<template>
    <div class="flex-grow-[3] flex justify-between m-20">
        <ul class="menu flex items-center rounded-xl w-[30%] h-full">
            <li v-for="(item, index) in menuItems" :key="index">
                <router-link :class="{ active: item.component === $route.name }" :to="{name: item.component}" > {{ item.name }} </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>