<script setup>

import {onMounted, onUnmounted, ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import SearchIcon from "@/components/menuIcons/SearchIcon.vue";
import Hr from "@/components/menuItems/Hr.vue";

onMounted(() => {
	addEventListener('keydown', (e) => {
		if(e.key == 'Escape')
			selectedFriend.value = null;
	});
});

onUnmounted(() => {
	removeEventListener('keydown', (e) => {
		if(e.key == 'Escape')
			selectedFriend.value = null;
	});
});

const friends = ref([
	{
		id: 1,
		name: 'Иван',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: '12:00'
	},
	{
		id: 2,
		name: 'Петр',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела?',
		time: 'Пн'
	},
	{
		id: 3,
		name: 'Сергей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: '21:40'
	},
	{
		id: 4,
		name: 'Алексей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела?',
		time: 'Ср'
	},
	{
		id: 5,
		name: 'Дмитрий',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: 'Вт'
	},
	{
		id: 6,
		name: 'Андрей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела123123123123123112312312312?',
		time: '12.03.2021'
	},
	{
		id: 4,
		name: 'Алексей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела?',
		time: 'Ср'
	},
	{
		id: 5,
		name: 'Дмитрий',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: 'Вт'
	},
	{
		id: 6,
		name: 'Андрей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела123123123123123112312312312?',
		time: '12.03.2021'
	}
]);

const selectedFriend = ref(null);

const messages = ref({
	1: [
		{
			id: 1,
			sender_id: 1,
			date: new Date(),
			type: 'text | image | video',
			content: 'Привет, как дела?',
		}
	]
});

</script>

<template>
	<div class="flex justify-center items-center">
		<div class="flex flex-grow-[3] max-w-[90vw] h-[800px] m-10 bg-navbar rounded-xl">
			<div class="flex flex-col items-center w-[30%] m-6 bg-second-background rounded-xl">
				<div class="text-main font-bold text-[24px] my-6">Сообщения</div>
				<!--<CustomInput class="w-full px-10" placeholder="Поиск"/>-->
				<div class="relative flex justify-center items-center w-full mb-6">
					<input type="text" class="w-[80%] pl-8 py-2 bg-navbar rounded-[25px] text-[#ebebeba3] text-[18px]" placeholder="Поиск"/>
					<SearchIcon class="absolute w-5 h-5 left-14" />
				</div>
				<div class="w-full overflow-auto mb-6">
					<div
						class="flex m-2 rounded-xl p-2 last:mb-0 first:mt-0 hover:bg-main-background active:scale-95 cursor-pointer select-none"
						v-for="friend in friends"
						@click="selectedFriend = friend"
					>
						<div class="relative mr-2">
							<img class="min-w-14 w-14 min-h-14 h-14 rounded-full" :src="friend.avatar"/>
							<div v-if="friend.status == 'online'" class="absolute right-[5px] bottom-[5px] w-2 h-2 rounded-full bg-green-600"></div>
						</div>
						<div class="w-full overflow-hidden">
							<div class="w-full flex justify-between">
								<div class="text-main font-bold text-[18px]">{{friend.name}}</div>
								<div class="text-[14px]">{{friend.time}}</div>
							</div>
							<div class="text-[16px] text-nowrap">{{friend.lastMessage}}</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="selectedFriend" class="flex flex-col items-center w-full m-6 ml-0 rounded-xl"> <!-- bg-second-background -->
				<div class="text-main font-bold text-[24px] mb-2">{{selectedFriend.name}}</div>
				<Hr class="w-full"/>
				<div class="flex-grow-[3] w-full h-full"></div>
				<div class="w-full">
					<input type="text" class="w-full p-4 rounded-xl" placeholder="Type a message here..."/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>