<script setup>
import {markRaw, ref} from "vue";

import github from "@/components/menuIcons/socialsIcons/GithubIcon.vue";
import tiktok from "@/components/menuIcons/socialsIcons/TiktokIcon.vue";
import twitter from "@/components/menuIcons/socialsIcons/TwitterIcon.vue";
import vk from "@/components/menuIcons/socialsIcons/VkIcon.vue";
import discord from "@/components/menuIcons/socialsIcons/DiscordIcon.vue";
import facebook from "@/components/menuIcons/socialsIcons/FacebookIcon.vue";
import telegram from "@/components/menuIcons/socialsIcons/TelegramIcon.vue";
import steam from "@/components/menuIcons/socialsIcons/SteamIcon.vue";
import google from "@/components/menuIcons/socialsIcons/GoogleIcon.vue";
import reddit from "@/components/menuIcons/socialsIcons/RedditIcon.vue";

//Пофиксить варнинги

const items = ref([
	{
		id: 1,
		name: 'Steam',
		svg: markRaw(steam),
		bgColor: 'linear-gradient(180deg, #111D2E, #051839, #0A1B48, #132E62, #144B7E, #136497, #1387B8)',
		link: null
	},
	{
		id: 2,
		name: 'Telegram',
		svg: markRaw(telegram),
		bgColor: 'linear-gradient(180deg, #37BBFE, #007DBB)',
		link: null
	},
	{
		id: 3,
		name: 'Google',
		svg: markRaw(google),
		bgColor: '#FF4500',
		link: null
	},
	{
		id: 4,
		name: 'Reddit',
		svg: markRaw(reddit),
		bgColor: '#FF4500',
		link: null
	},{
		id: 5,
		name: 'Github',
		svg: markRaw(github),
		bgColor: '#000000',
		link: null
	},{
		id: 6,
		name: 'Discord',
		svg: markRaw(discord),
		bgColor: '#5865F2',
		link: null
	},
	{
		id: 7,
		name: 'Facebook',
		svg: markRaw(facebook),
		bgColor: '#4460A0',
		link: null
	},{
		id: 8,
		name: 'Twitter',
		svg: markRaw(twitter),
		bgColor: '#1DA1F2',
		link: null
	},
	{
		id: 9,
		name: 'Vk',
		svg: markRaw(vk),
		bgColor: '#5281b8',
		link: null
	},
	{
		id: 10,
		name: 'Tiktok',
		svg: markRaw(tiktok),
		bgColor: '#000000',
		link: null
	},
]);

</script>

<template>
	<div
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div class="w-[40%]">
			<div v-for="item in items">
				<div class="flex items-center w-full p-2 rounded-xl my-2" :style="{ background: item.bgColor }">
					<div class="flex justify-center items-center">
						<component :is="item.svg" class="w-8 h-8"/>
					</div>
					<div class="text-white text-center w-full text-[16px] ml-2">Продолжить с {{ item.name }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>