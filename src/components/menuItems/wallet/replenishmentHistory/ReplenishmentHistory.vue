<script setup>

import {ref} from "vue";

const history = ref([
	{
		id: 1,
		date: '12.12.2021',
		amount: 100,
		system: 'Visa',
	},
	{
		id: 2,
		date: '12.12.2021',
		amount: 100,
		system: 'Crypto',
	},
	{
		id: 3,
		date: '12.12.2021',
		amount: 100,
		system: 'Skins',
	},
	{
		id: 4,
		date: '12.12.2021',
		amount: 100,
		system: 'Visa',
	},
	{
		id: 5,
		date: '12.12.2021',
		amount: 100,
		system: 'Visa',
	},
	{
		id: 6,
		date: '12.12.2021',
		amount: 100,
		system: 'Crypto',
	},
	{
		id: 7,
		date: '12.12.2021',
		amount: 100,
		system: 'Skins',
	},
	{
		id: 8,
		date: '12.12.2021',
		amount: 100,
		system: 'Visa',
	},
	{
		id: 7,
		date: '12.12.2021',
		amount: 100,
		system: 'Skins',
	},
	{
		id: 8,
		date: '12.12.2021',
		amount: 100,
		system: 'Visa',
	},
	{
		id: 7,
		date: '12.12.2021',
		amount: 100,
		system: 'Skins',
	},
	{
		id: 8,
		date: '12.12.2021',
		amount: 100,
		system: 'Visa',
	}
]);

const isDataReady = ref(true);

</script>

<template>
	<div
		v-if="isDataReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div class="overflow-x-auto w-[70%]">
			<table class="table">
				<thead>
					<tr>
						<th></th>
						<th>Date</th>
						<th>Amount</th>
						<th>System</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in history">
						<th>{{ index + 1 }}</th>
						<td>{{ item.date }}</td>
						<td>{{ item.amount }}</td>
						<td>{{ item.system }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>