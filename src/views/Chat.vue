<script setup>

import {computed, onMounted, onUnmounted, ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import SearchIcon from "@/components/menuIcons/SearchIcon.vue";
import Hr from "@/components/menuItems/Hr.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import ClipIcon from "@/components/menuIcons/ClipIcon.vue";
import SmileIcon from "@/components/menuIcons/SmileIcon.vue";
import MicrophoneIcon from "@/components/menuIcons/MicrophoneIcon.vue";

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
		nametag: 'Иван',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: '12:00'
	},
	{
		id: 2,
		nametag: 'Петр',
		status: 'offline',
		lastMessage: 'Привет, как дела?',
		time: 'Пн'
	},
	{
		id: 3,
		nametag: 'Сергей',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: '21:40'
	},
	{
		id: 4,
		nametag: 'Алексей',
		status: 'offline',
		lastMessage: 'Привет, как дела?',
		time: 'Ср'
	},
	{
		id: 5,
		nametag: 'Дмитрий',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: 'Вт'
	},
	{
		id: 6,
		nametag: 'Андрей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела123123123123123112312312312?',
		time: '12.03.2021'
	},
	{
		id: 7,
		nametag: 'Алексей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела?',
		time: 'Ср'
	},
	{
		id: 8,
		nametag: 'Дмитрий',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'online',
		lastMessage: 'Привет, как дела?',
		time: 'Вт'
	},
	{
		id: 9,
		nametag: 'Андрей',
		avatar: 'https://cdn.oneesports.gg/cdn-data/2021/08/Dota2_Shadow_Fiend.jpg',
		status: 'offline',
		lastMessage: 'Привет, как дела123123123123123112312312312?',
		time: '12.03.2021'
	}
]);

const selectedFriend = ref(null);
const hoverFriend = ref(false);

const myId = ref(0)

const messages = ref({
	1: [
		{
			id: 44,
			sender_id: 0,
			date: new Date(),
			type: 'text', // text, image, video, audio, file
			content: 'Ага',
		},
        {
            id: 35,
            sender_id: 0,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 33,
            sender_id: 1,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: '<TheFooter v-if="urls.includes(fullPath)" /> вот так тоже не работает))',
        },
        {
            id: 27,
            sender_id: 1,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Как правильно сделать?',
        },
        {
            id: 24,
            sender_id: 1,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'const fullPath = useRoute().fullPath\n' +
                'const urls = [\'/buy\', \'/rent\']\n' +
                '\n' +
                '<TheFooter v-if="fullPath in urls" />\n' +
                '\n' +
                '\n' +
                'Вот такая тема у меня работает магическим образом, я как то интуитивно это написал\n' +
                'посмотрел доки по js arr. Это типа под капотом реализовано.\n' +
                '\n' +
                'for (let key in arr) {\n' +
                '  alert( arr[key] ); // Яблоко, Апельсин, Груша\n' +
                '}\n' +
                '\n' +
                'А где именно во вью доках такое написано может есть другие фишки которые js использует при помощи синтаксического сахара?',
        },
        {
            id: 22,
            sender_id: 3,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 18,
            sender_id: 3,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 16,
            sender_id: 1,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 14,
            sender_id: 1,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 11,
            sender_id: 2,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 10,
            sender_id: 2,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 9,
            sender_id: 2,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        },
        {
            id: 7,
            sender_id: 2,
            date: new Date(),
            type: 'text', // text, image, video, audio, file
            content: 'Привет, как дела?',
        }
	],
	2: [
		{
			id: 5,
			sender_id: 0,
			date: new Date(),
			type: 'text', // text, image, video, audio, file
			content: 'Ага',
		},
		{
			id: 4,
			sender_id: 0,
			date: new Date(),
			type: 'text', // text, image, video, audio, file
			content: 'Привет, как дела?',
		},
		{
			id: 3,
			sender_id: 1,
			date: new Date(),
			type: 'text', // text, image, video, audio, file
			content: '<TheFooter v-if="urls.includes(fullPath)" /> вот так тоже не работает))',
		},
		{
			id: 2,
			sender_id: 1,
			date: new Date(),
			type: 'text', // text, image, video, audio, file
			content: 'Как правильно сделать?',
		},
		{
			id: 1,
			sender_id: 1,
			date: new Date(),
			type: 'text', // text, image, video, audio, file
			content: 'const fullPath = useRoute().fullPath\n' +
				'const urls = [\'/buy\', \'/rent\']\n' +
				'\n' +
				'<TheFooter v-if="fullPath in urls" />\n' +
				'\n' +
				'\n' +
				'Вот такая тема у меня работает магическим образом, я как то интуитивно это написал\n' +
				'посмотрел доки по js arr. Это типа под капотом реализовано.\n' +
				'\n' +
				'for (let key in arr) {\n' +
				'  alert( arr[key] ); // Яблоко, Апельсин, Груша\n' +
				'}\n' +
				'\n' +
				'А где именно во вью доках такое написано может есть другие фишки которые js использует при помощи синтаксического сахара?',
		},
	]
});

const search = ref('')

const searchFriends = computed(() => {
	return friends.value.filter(friend => friend.nametag.toLowerCase().includes(search.value.toLowerCase()))
});

const indexMessages = ref(1);

const firstMessage = (message) => {
	const messageIndex = messages.value[indexMessages.value].findIndex(item => item.id == message.id);
	if(messages.value[indexMessages.value][messageIndex + 1] == undefined || messages.value[indexMessages.value][messageIndex + 1].sender_id != message.sender_id)
		return true;
	return false;
};

const lastMessage = (message) => {
	const messageIndex = messages.value[indexMessages.value].findIndex(item => item.id == message.id);
	if(messages.value[indexMessages.value][messageIndex - 1] == undefined || messages.value[indexMessages.value][messageIndex - 1].sender_id != message.sender_id)
		return true;
	return false;
};

//messages.value[indexMessages.value].filter((obj, index) => messages.value[indexMessages.value].findIndex(testObj => testObj.sender_id === obj.sender_id) === index).length

const countMembers = computed(() => {
	console.log(messages.value[indexMessages.value].filter((obj, index) => messages.value[indexMessages.value].findIndex(testObj => testObj.sender_id === obj.sender_id) === index).length);
	return messages.value[indexMessages.value].filter((obj, index) => messages.value[indexMessages.value].findIndex(testObj => testObj.sender_id === obj.sender_id) === index).length;
});

</script>

<template>
	<div class="flex justify-center items-center">
		<div class="flex justify-between flex-grow-[3] max-w-[90vw] h-[800px] m-10 bg-navbar rounded-xl">
			<div class="flex flex-col items-center w-[25%] m-6 bg-second-background rounded-xl">
				<div class="text-main font-bold text-[24px] my-6">Сообщения</div>
				<div class="relative flex justify-center items-center w-full mb-6">
					<input
						type="text"
						class="w-full pl-8 py-2 mx-4 bg-navbar rounded-[25px] text-[#ebebeba3] text-[18px]"
						placeholder="Поиск"
						v-model="search"
					/>
					<SearchIcon class="absolute w-5 h-5 left-0 ml-6" />
				</div>
				<div class="w-full overflow-auto mb-6">
					<div
						class="flex m-2 rounded-xl p-2 last:mb-0 first:mt-0 hover:bg-navbar active:scale-95 cursor-pointer select-none"
						v-for="friend in searchFriends"
						@click="selectedFriend = friend"
						@mouseover="hoverFriend = friend"
						@mouseleave="hoverFriend = null"
					>
						<div class="relative flex flex-col mr-2">
							<UserAvatar class="min-w-14 w-14 min-h-14 h-14" :user="friend"/>
							<div
								v-if="friend.status == 'online'"
								class="absolute right-[5px] bottom-[5px] w-2 h-2 rounded-full bg-green-600 outline outline-[3px]"
								:class="hoverFriend == friend ? 'outline-navbar' : 'outline-second-background'"
							></div>
						</div>
						<div class="w-full overflow-hidden">
							<div class="w-full flex justify-between">
								<div class="text-main font-bold text-[18px]">{{friend.nametag}}</div>
								<div class="text-[14px]">{{friend.time}}</div>
							</div>
							<div class="text-[16px] text-nowrap">{{friend.lastMessage}}</div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="selectedFriend" class="flex flex-col w-[70%] items-center m-6 ml-0 rounded-xl"> <!-- bg-second-background -->
				<div class="text-main font-bold text-[24px] mb-2">{{selectedFriend.nametag}}</div>
				<Hr class="w-full" />
				<div class="flex flex-col-reverse flex-grow-[3] w-full h-full overflow-auto my-4 pr-2">
                    <div
                        class="flex items-center my-2 rounded-xl first:mb-0 last:mt-0"
                        :class="{'flex-row-reverse' : myId == message.sender_id}"
                        v-for="message in messages[indexMessages]"
                    >
	                    <div v-if="myId != message.sender_id && countMembers > 2" class="self-end min-w-8 w-8 min-h-8 h-8 mr-2">
		                    <UserAvatar class="w-full h-full" v-if="lastMessage(message) && message?.sender_id != myId"  :user="friends.find((friend) => friend.id == message.sender_id)" />
	                    </div>
	                    <div
		                    class="self-end w-[16px] h-[16px] overflow-hidden rotate-180"
	                        :class="{'rotate-[270deg]' : myId == message.sender_id}"
	                    >
		                    <div v-if="lastMessage(message)" class="relative flex justify-center items-center w-[32px] h-[32px] bg-second-background">
			                    <div class="w-full h-full rounded-full bg-navbar"></div>
		                    </div>
	                    </div>
                        <div class="max-w-[50%]">
	                        <div
		                        class="flex flex-col bg-second-background rounded-xl py-1"
	                            :class="[{'rounded-bl-none' : lastMessage(message) && myId != message.sender_id}, {'rounded-br-none' : lastMessage(message) && myId == message.sender_id}]"
	                        >
		                        <div v-if="firstMessage(message) && myId != message.sender_id" class="text-main text-[16px] font-bold py-1 ml-4">{{friends.find((friend) => friend.id == message.sender_id)?.nametag}}</div>
		                        <div class="relative flex justify-center items-center py-1 px-4">
			                        <div class="mr-10">{{message.content}}</div>
			                        <div class="absolute right-2 bottom-0 text-[14px]">{{message.date.getHours()}}:{{message.date.getMinutes()}}</div>
		                        </div>
	                        </div>
                        </div>
                    </div>
                </div>
				<div class="relative flex items-center w-full">
					<input type="text" class="w-full p-4 pl-10 pr-20 rounded-xl bg-second-background" placeholder="Type a message here..."/>
					<ClipIcon class="absolute ml-2 w-6 h-6"/>
					<SmileIcon class="absolute right-8 mr-2 w-7 h-7"/>
					<MicrophoneIcon class="absolute right-0 mr-2 w-7 h-7"/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>