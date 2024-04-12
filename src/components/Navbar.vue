<script setup>
import axios from "@/axios/index.js";
import {ref, watch, provide} from "vue";
import { i18n } from "@/i18n/index.js"
const signup = async () => {
    try{
        const resp = await axios.post('/api/user/reg', {
			login : '12355',
	        password : '12355',
	        nametag : 'Dmitry',
	        email : 'sosuhyi@mail.ru',
	        remember : 1
        });
        console.log(resp)
    }
    catch (e){
        console.log(e);
    }
}

const getSUKA = async () => {
    try{
        const resp = await axios.post('/api/user/init');
        console.log(resp)
    }
    catch (e){
        console.log(e);
    }
}

const activeTheme = ref('dark');

const themes = ref([
	'dark',
	'dark_blue',
	'light_cream'
]);

watch(() => activeTheme.value,
	(value) => document.querySelector('html').setAttribute('data-theme', value),
	{ immediate: true }
)

const activeLanguage = ref('ru');

const languages = ref([
	'ru',
	'en'
]);

watch(() => activeLanguage.value,
	(value) => i18n.global.locale = value,
	{ immediate: true }
)

</script>

<template>
    <nav class="border-gray-200 bg-navbar">
        <div class="max-w-[90vw] flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="flex items-center btn btn-ghost normal-case hover:scale-125 hover:bg-navbar">
                <img src="/favicon.ico" class="h-10 mr-3" alt="Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-navbar-text">Steam-Invest</span>
            </router-link>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 bg-navbar text-navbar-text">
                    <li>
                        <router-link to="/home" class="btn btn-ghost normal-case">Home</router-link>
                    </li>
                </ul>
            </div>

	        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
		        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 bg-navbar text-navbar-text">
			        <li>
				        <router-link to="/chat" class="btn btn-ghost normal-case">Chat</router-link>
			        </li>
		        </ul>
	        </div>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 bg-navbar text-navbar-text">
                    <li>
                        <router-link to="/settings" class="btn btn-ghost normal-case">Settings</router-link>
                    </li>
                </ul>
            </div>

	        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
		        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 bg-navbar text-navbar-text">
			        <li v-for="theme in themes" @click="activeTheme = theme">
				        {{ theme }}
			        </li>
		        </ul>
	        </div>

	        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
		        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 bg-navbar text-navbar-text">
			        <li v-for="language in languages" @click="activeLanguage = language">
				        {{ language }}
			        </li>
		        </ul>
	        </div>

            <div class="md:order-3 inline-flex items-center">
                <div class="flex">
                    <div class="h-10 block px-4 py-2 mr-3 leading-loose text-xs text-center text-black font-semibold bg-gray-50 hover:bg-gray-300 hover:scale-110 rounded-xl"
                        @click="signup"
                    >Login</div>
                    <div class="h-10 block px-4 py-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 hover:scale-110 rounded-xl"
                        @click="getSUKA"
                    >Sign Up</div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>