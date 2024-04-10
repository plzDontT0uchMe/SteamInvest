<script setup>

import {computed, ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";

const friends = ref([
	{
		id: 1,
		name: 'Friend 1',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 2,
		name: 'Friend 2',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 3,
		name: 'Friend 3',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 4,
		name: 'Friend 4',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 5,
		name: 'Friend 5',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 6,
		name: 'Friend 6',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 7,
		name: 'Friend 7',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 8,
		name: 'Friend 8',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 9,
		name: 'Friend 9',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
	{
		id: 10,
		name: 'Friend 10',
		avatar: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	},
])

const search = ref('')

const searchFriends = computed(() => {
	return friends.value.filter(friend => friend.name.toLowerCase().includes(search.value.toLowerCase()))
});

const isFriendsReady = ref(true);

</script>

<template>
	<div
		v-if="isFriendsReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>

		<div class="flex justify-between items-center w-full">
			<CustomInput
				class="w-full"
				:placeholder="$t('settings.body.friends.search')"
				v-model="search"
			/>
			<div class="flex justify-center items-center space-x-5 mb-6 ml-6">
				<button
					class="bg-green-600 hover:bg-green-700 active:scale-95 text-white text-[16px] text-nowrap py-2 rounded w-36"
				>
					{{$t('settings.body.friends.accept_all')}}
				</button>
				<button
					class="bg-red-600 hover:bg-red-900 active:scale-95 text-white text-[16px] text-nowrap py-2 rounded w-36"
				>
					{{$t('settings.body.friends.decline_all')}}
				</button>
			</div>
		</div>

		<div class="w-full max-h-[60vh] overflow-y-auto pr-2">
			<div
				v-for="friend in searchFriends"
				:key="friend.id"
				class="flex justify-between items-center w-full mb-6  bg-second-background p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
			>
				<div class="flex items-center space-x-5">
					<img
						:src="friend.avatar"
						:alt="friend.name"
						class="w-16 h-16 rounded-lg"
					/>
					<p
						class="text-[16px]"
					>
						{{ friend.name }}
					</p>
				</div>
				<div class="flex justify-center items-center space-x-5">
					<button
						class="bg-green-600 hover:bg-green-700 active:scale-95 text-white text-[16px] text-nowrap py-2 rounded w-36"
					>
						{{$t('settings.body.friends.accept')}}
					</button>
					<button
						class="bg-red-600 hover:bg-red-900 active:scale-95 text-white text-[16px] text-nowrap py-2 rounded w-36"
					>
						{{$t('settings.body.friends.decline')}}
					</button>
				</div>
			</div>
		</div>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>