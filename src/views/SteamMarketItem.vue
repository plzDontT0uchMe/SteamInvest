<script setup>

import { onMounted, ref } from "vue";
import { Chart, registerables } from "chart.js";
import { LineChart } from 'vue-chart-3'
import axios from "axios";
import {useRoute} from "vue-router";
import Heart from "@/components/menuIcons/HeartIcon.vue";

Chart.register(...registerables);

const route = useRoute();

const lineChart = ref(null);

onMounted(async () => {
	await getItem();
	await getHistory('month');
});

const chartData = ref({
	labels: [],
	datasets: [
		{
			label: 'Price History',
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.5
		}
	]
});

const options = ref({
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false
		},
	},
});

const isItemReady = ref(false);

const getItem = (async () => {
	isItemReady.value = false;
	try{
		const resp = await axios.get(`https://dev.steam-invest.pro/api/steam_market/items/${route.params.market_hash}`);
		if(resp?.data?.success){
			item.value = resp['data']['data'];
			item.value.app_name = 'Counter-Strike 2'
			item.value.app_icon = 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/730/8dbc71957312bbd3baea65848b545be9eae2a355.jpg';
		}
		else
			throw Error('Ошибка!');
	}
	catch (e){
		console.log(e);
	}
	finally {
		isItemReady.value = true;
	}
})

const getHistory = (async (date) => {
	if(history.value[date].length){
		chartData.value.labels = history.value[date].map(h => h.date);
		chartData.value.datasets[0].data = history.value[date].map(h => h.price);
		return;
	}
	try{
		const resp = await axios.get(`https://dev.steam-invest.pro/api/steam_market/items/${route.params.market_hash}/history/${date}`);
		if(resp?.data?.success){
			history.value[date] = resp['data']['data'];
			chartData.value.labels = history.value[date].map(h => h.date);
			chartData.value.datasets[0].data = history.value[date].map(h => h.price);
		}
		else
			throw Error('Ошибка!');
	}
	catch (e){
		console.log(e);
	}
})

const item = ref({
	market_hash: '',
	icon: '',
	app_name: '',
	app_icon: '',
	type: '',
	price: 0,
	avg_day_procent: 0,
	avg_week_procent: 0,
	avg_month_procent: 0
});

const history = ref({
	day: [],
	week: [],
	month: [],
	year: [],
	lifetime: []
})

const buttons = [
	{
		name: 'day',
		onClick: () => getHistory('day')
	},
	{
		name: 'week',
		onClick: () => getHistory('week')
	},
	{
		name: 'month',
		onClick: () => getHistory('month')
	},
	{
		name: 'year',
		onClick: () => getHistory('year')
	},
	{
		name: 'lifetime',
		onClick: () => getHistory('lifetime')
	}
]

const isFollow = ref(false);

</script>

<template>
	<div class="flex justify-center items-center">
		<div class="flex flex-col justify-center flex-grow-[3] max-w-[90vw] my-10 bg-navbar rounded-xl">
			<div class="flex justify-center items-center my-6">
				<div v-if="isItemReady" class="relative flex justify-between items-center w-full mx-12 bg-[rgb(20,20,20)] rounded-xl">

					<div class="flex justify-center items-center w-[50%] m-6">
						<img class="rounded-xl" :src="'https://steamcommunity-a.akamaihd.net/economy/image/' + item.icon"/>
					</div>
					<div class="flex justify-center items-center w-[50%] m-6">
						<div class="flex flex-col items-center h-full mr-6">
							<div class="flex flex-col items-center mb-6">
								<div class="text-4xl font-bold text-center text-main mt-6 mb-2">{{item.market_hash}}</div>
								<div class="flex justify-center items-center">
									<div class="mr-2">
										<img class="rounded" :src="item.app_icon"/>
									</div>
									<div>
										<div class="text-xl">{{item.app_name}}</div>
										<div class="text-xl">{{item.type}}</div>
									</div>
								</div>
							</div>
							<div class="flex justify-center items-center text-xl my-2">
								<p class="mr-1">{{$t('item.avg_day_procent')}}:</p>
								<p :class="parseInt(item.avg_day_procent) > 0 ? 'text-green-700' : 'text-red-700'">{{item.avg_day_procent}}%</p>
							</div>
							<div class="flex justify-center items-center text-xl my-2">
								<p class="mr-1">{{$t('item.avg_week_procent')}}:</p>
								<p :class="parseInt(item.avg_week_procent) > 0 ? 'text-green-700' : 'text-red-700'">{{item.avg_week_procent}}%</p>
							</div>
							<div class="flex justify-center items-center text-xl my-2">
								<p class="mr-1">{{$t('item.avg_month_procent')}}:</p>
								<p :class="parseInt(item.avg_month_procent) > 0 ? 'text-green-700' : 'text-red-700'">{{item.avg_month_procent}}%</p>
							</div>
							<div class="flex justify-center items-center text-xl mt-2 mb-6">
								<p class="mr-1">{{$t('item.price')}}:</p>
								<p class="text-main">{{item.price}}</p>
							</div>
						</div>
					</div>

					<Heart
						class="absolute bottom-5 right-5 w-8 h-8 cursor-pointer hover:scale-95 active:scale-90 select-none"
						:class="isFollow ? 'fill-red-700' : 'none'"
						@click="isFollow = !isFollow"
					/>

				</div>
				<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
			</div>
			<div class="flex justify-center items-center my-6">
				<div class="flex flex-col justify-center items-center w-full mx-12 bg-[rgb(20,20,20)] rounded-xl">
					<p class="text-xl font-bold text-main my-2">{{$t('item.history_price')}}</p>
					<div class="w-full my-2">
						<LineChart ref="lineChart" :chartData="chartData" :options="options"/>
					</div>
					<div class="self-end flex my-2 mx-6">
						<p class="mx-2">{{$t('item.zoom_graph')}}:</p>
						<div v-for="button in buttons" class="mx-2">
							<button @click="button.onClick()" class="text-main">{{$t(`item.${button.name}`)}}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>