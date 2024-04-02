<script setup>

import {computed, onMounted, ref, watch} from "vue";
import axios from "@/axios/index.js";
import CustomInput from "@/components/CustomInput.vue";
import MenuButtons from "@/components/menuItems/MenuButtons.vue";

const assets = ref([
	{
		id: 1,
		name: 'Market 1',
		key: 'http://market1.com/123123'
	},
	{
		id: 2,
		name: 'Market 2',
		key: 'http://market2.com/123123'
	},
	{
		id: 3,
		name: 'Market 3',
		key: 'http://market3.com/123123'
	},
	{
		id: 4,
		name: 'Market 4',
		key: 'http://market4.com/123123'
	},
	{
		id: 5,
		name: 'Market 5',
		key: 'http://market5.com/123123'
	}
]);

const copyAssets = ref([])

onMounted(() => {
	try{
		copyAssets.value = JSON.parse(JSON.stringify(assets.value));
	} catch (e) {
		copyAssets.value = [];
		console.log(e)
	}
})

const isAssetsReady = ref(true);

const isChange = computed(() => {
	return JSON.stringify(assets.value) !== JSON.stringify(copyAssets.value);
});

</script>

<template>
	<div
		v-if="isAssetsReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div
			class="w-[70%]"
			v-for="item in assets"
		>
			<p class="text-main text-[16px] ml-2">{{'Введите api-ключ для ' + item.name}}</p>
			<CustomInput
				class="w-full"
				v-model="item.key"
			/>
		</div>
		<MenuButtons v-if="isChange"/>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>