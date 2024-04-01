<script setup>

import {ref} from "vue";
import axios from "@/axios/index.js";
import SessionsList from "@/components/menuItems/SessionsList.vue";

const assets = ref({
	'current': [
		{
			'id': 1,
			'browser': 'Chrome',
			'type': 'pc',
			'ipCreate': '192.0.0.1',
			'ipCurrent': '128.0.0.1',
			'dateCreate': '2021-10-10 10:10:10',
			'dateCurrent': '2021-10-10 10:10:10'
		},
	],
	'active': [
		{
			'id': 2,
			'browser': 'Chrome',
			'type': 'pc',
			'ipCreate': '192.0.0.1',
			'ipCurrent': '128.0.0.1',
			'dateCreate': '2021-10-10 10:10:10',
			'dateCurrent': '2021-10-10 10:10:10'
		},
		{
			'id': 3,
			'browser': 'Chrome',
			'type': 'mobile',
			'ipCreate': '192.0.0.1',
			'ipCurrent': '128.0.0.1',
			'dateCreate': '2021-10-10 10:10:10',
			'dateCurrent': '2021-10-10 10:10:10'
		},
		{
			'id': 4,
			'browser': 'Chrome',
			'type': 'pc',
			'ipCreate': '192.0.0.1',
			'ipCurrent': '128.0.0.1',
			'dateCreate': '2021-10-10 10:10:10',
			'dateCurrent': '2021-10-10 10:10:10'
		}
	],
	'history': [
		{
			'id': 5,
			'browser': 'Chrome',
			'type': 'pc',
			'ipCurrent': '128.0.0.1',
			'dateCurrent': '2021-10-10 10:10:10'
		},
		{
			'id': 6,
			'browser': 'Chrome',
			'type': 'mobile',
			'ipCurrent': '128.0.0.1',
			'dateCurrent': '2021-10-10 10:10:10'
		},
		{
			'id': 7,
			'browser': 'Chrome',
			'type': 'pc',
			'ipCurrent': '128.0.0.1',
			'dateCurrent': '2021-10-10 10:10:10'
		}
	]
});

const isAssetsReady = ref(true);

</script>

<template>
	<div
		v-if="isAssetsReady"
		class="flex flex-col justify-center items-center w-[80%] my-6"
	>
		<SessionsList
			name="Текущая сессия"
			v-model:assets="assets.current"
		/>
		<SessionsList
			name="Активные сессии"
			v-model:assets="assets.active"
		/>
		<SessionsList
			name="История сессий"
			v-model:assets="assets.history"
		/>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>