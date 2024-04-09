<script setup>

import { onMounted, ref } from "vue";
import { Chart } from 'chart.js/auto';
import axios from "axios";
import {useRoute} from "vue-router";

const route = useRoute();
let myChart = null;

onMounted(() => {
	myChart = new Chart('myChart', {
		type: 'line',
		data: {
			labels: history.value.month.map(h => h.date),
			datasets: [
				{
					label: 'Price History',
					data: history.value.month.map(h => h.price),
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.5
				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					display: false
				}
			}
		},
	});
	getItem();
});

const getItem = (async () => {
	//isAssetsReady.value = false;
	try{
		const resp = await axios.get(`https://dev.steam-invest.pro/api/steam_market/items/${route.params.market_hash}`);
		if(resp?.data?.success){
			console.log(resp['data']['data']);
			item.value = resp['data']['data'];
		}
		else
			throw Error('Ошибка!');
	}
	catch (e){
		console.log(e);
	}
	finally {
		//isAssetsReady.value = true;
	}
})

const getHistory = (async () => {
	//isAssetsReady.value = false;
	try{
		const resp = await axios.get(`https://dev.steam-invest.pro/api/steam_market/items/${route.params.market_hash}/history/lifetime`);
		if(resp?.data?.success){
			console.log(resp['data']['data']);
			console.log(myChart);
			myChart.data.labels = resp['data']['data'].map(h => h.date);
			myChart.data.datasets[0].data = resp['data']['data'].map(h => h.price);
			myChart.update();
			history.value.month = resp['data']['data'];
		}
		else
			throw Error('Ошибка!');
	}
	catch (e){
		console.log(e);
	}
	finally {
		//isAssetsReady.value = true;
	}
})

const item = ref({
	id: 1,
	market_hash: 'Kilowatt Case',
	type: 'Base Grade Container',
	price: 182.78,
	avg_day_procent: '-4.86%',
	avg_week_procent: '-11.42%',
	avg_month_procent: '-36.55%',
	icon: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQznaKdID5D6d23ldHSwKOmZeyEz21XvZZ12LzE9t6nigbgqkplNjihJIaLMlhpF1ZeR5c/360fx360f',
});

const history = ref({
	'day': [
		{
			date: '2021-10-01',
			price: 100
		}
	],
	'week': [
		{
			date: '2021-10-01',
			price: 100
		}
	],
	'month': [
		{
			date: '2021-10-01',
			price: 100
		}
	],
	'year': [
		{
			date: '2021-10-01',
			price: 100
		}
	],
	'lifetime': [
		{
			date: '2021-10-01',
			price: 100
		}
	]
})

</script>

<template>
<div class="flex justify-center items-center">
	<div class="flex flex-col justify-center flex-grow-[3] max-w-[90vw] my-10 bg-navbar rounded-xl">
		<div class="flex justify-center items-center my-6">
			<div class="flex justify-between items-center w-full mx-12 bg-[rgb(20,20,20)] rounded-xl">
				<div class="flex justify-center items-center w-[50%]">
					<img class="rounded-xl m-2" :src="'https://steamcommunity-a.akamaihd.net/economy/image/' + item.icon"/>
				</div>
				<div class="flex justify-center items-center w-[50%]">
					<div class="flex flex-col items-center h-full mr-6">
						<div class="flex flex-col items-center mb-6">
							<div class="text-4xl font-bold text-center text-main mt-6">{{item.market_hash}}</div>
							<div class="text-xl">{{item.type}}</div>
						</div>
						<div class="flex justify-center items-center text-xl my-2">
							<p class="mr-1">Цена за сутки:</p>
							<p :class="parseInt(item.avg_day_procent) > 0 ? 'text-green-700' : 'text-red-700'">{{item.avg_day_procent}}%</p>
						</div>
						<div class="flex justify-center items-center text-xl my-2">
							<p class="mr-1">Цена за неделю:</p>
							<p :class="parseInt(item.avg_week_procent) > 0 ? 'text-green-700' : 'text-red-700'">{{item.avg_week_procent}}%</p>
						</div>
						<div class="flex justify-center items-center text-xl my-2">
							<p class="mr-1">Цена за месяц:</p>
							<p :class="parseInt(item.avg_month_procent) > 0 ? 'text-green-700' : 'text-red-700'">{{item.avg_month_procent}}%</p>
						</div>
						<div class="flex justify-center items-center text-xl mt-2 mb-6">
							<p class="mr-1">Текущая цена:</p>
							<p class="text-main">{{item.price}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center items-center my-6">
			<div class="flex flex-col justify-center items-center w-full mx-12 bg-[rgb(20,20,20)] rounded-xl">
				<p class="text-xl font-bold text-main my-2">History price</p>
				<div class="w-full h-[30vh] my-2">
					<canvas id="myChart"></canvas>
				</div>
				<div class="self-end flex my-2 mx-6">
					<p class="mx-2">Zoom graph:</p>
					<button class="mx-2 text-main font-bold" @click="getHistory()">Day</button>
					<button class="mx-2 text-main font-bold">Week</button>
					<button class="mx-2 text-main font-bold">Month</button>
					<button class="mx-2 text-main font-bold">Year</button>
					<button class="mx-2 text-main font-bold">Lifetime</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>

</style>