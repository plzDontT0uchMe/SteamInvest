<script setup>
import {computed, ref} from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menuItems = ref([
    {
        name: 'my_account',
        route: 'my-account'
    },
    {
        name: 'api_keys',
	    route: 'api-keys'
    },
    {
        name: 'sessions',
	    route: 'sessions'
    },
    {
        name: 'socials',
	    route: 'socials'
    },
    {
        name: 'tariffs',
	    route: 'tariffs'
    },
    {
        name: 'friends',
	    route: 'friends'
    },
    {
        name: 'security',
	    route: 'security'
    },
    {
        name: 'notifications',
	    route: 'notifications'
    },
    {
        name: 'wallet',
	    route: 'wallet'
    }
])

const currentRoute = computed(() => menuItems.value.filter((item) => item.route == route.name)[0]);

</script>

<template>
    <div class="flex justify-center items-center">
        <div class="flex justify-between flex-grow-[3] max-w-[1200px] my-10">
            <ul class="menu flex items-center w-[20%] h-full bg-navbar rounded-xl">
                <li class="w-full p-1" v-for="(item, index) in menuItems" :key="index">
                    <router-link
	                    class="flex justify-center items-center text-main"
	                    :class="{ active: item.name === currentRoute.name }"
	                    :to="{name: item.route}"
                    >
	                    {{ $t(`settings.headers.${item.name}`) }}
                    </router-link>
                </li>
            </ul>
	        <div class="flex flex-col items-center w-[75%] bg-navbar rounded-xl">
		        <div class="text-[24px] text-main py-2">{{ $t(`settings.headers.${currentRoute.name}`) }}</div>
		        <div class="w-full rounded-3xl h-1 bg-black opacity-25 mt-2"></div>
		        <router-view></router-view>
	        </div>
        </div>
    </div>
</template>

<style scoped>

</style>