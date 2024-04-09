<script setup>

import WalletIcon from "@/components/menuIcons/WalletIcon.vue";
import {ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";

const balance = ref('100$');

const amount = ref('100');

const systemPayment = ref([
	{
		id: 1,
		name: 'Visa',
		icon: 'https://cdn-icons-png.flaticon.com/512/196/196561.png',
	},
	{
		id: 2,
		name: 'Crypto',
		icon: 'https://cdn-icons-png.flaticon.com/512/196/196561.png',
	},
	{
		id: 3,
		name: 'Skins',
		icon: 'https://www.esportsbets.com/wp-content/uploads/2019/08/skinpay.jpg',
	}
]);

const isDataReady = ref(true);

</script>

<template>
	<div
		v-if="isDataReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div class="flex items-center w-[70%] py-3 rounded-xl">
			<WalletIcon class="w-16 h-16 ml-6" />
			<div class="flex flex-col">
				<p class="ml-2 text-lg text-main">Баланс: {{ balance }}</p>
				<p class="ml-2 text-lg text-main">Последняя операция</p>
			</div>
		</div>

		<div class="flex flex-col justify-center items-center w-full py-3 rounded-xl my-6">
			<div class="w-[70%]">
				<p class="text-main text-[16px] ml-2">Сумма</p>
				<CustomInput
					class="w-full"
					placeholder="Сумма"
					v-model="amount"
				/>
				<input
					type="range"
					class="range range-xs"
					v-model="amount"
				/>
				<div
					v-for="item in systemPayment"
					class="flex items-center rounded-xl my-2 cursor-pointer hover:bg-main-background-hover transition-all duration-300 ease-in-out"
				>
					<input type="radio" name="radio-1" class="radio" checked/>
					<img class="w-16 h-16 ml-4" :src="item.icon" />
				</div>
				<div class="flex justify-center items-center my-4">
					<button class="bg-green-600 text-white w-24 py-2 rounded-xl">
						Оплатить
					</button>
					<p class="text-[16px] ml-2">К оплате: {{amount}}</p>
				</div>
			</div>
		</div>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>