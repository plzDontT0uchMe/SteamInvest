<script setup>

import WalletIcon from "@/components/menuIcons/WalletIcon.vue";
import {markRaw, ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import SkinPayIcon from "@/components/menuIcons/SkinPayIcon.vue";
import CryptoCloudIcon from "@/components/menuIcons/CryptoCloudIcon.vue";
import YookassaIcon from "@/components/menuIcons/YookassaIcon.vue";

const balance = ref('100$');

const amount = ref('100');

const systemPayment = ref([
	{
		id: 1,
		name: 'Yoookassa',
		icon: markRaw(YookassaIcon),
	},
	{
		id: 2,
		name: 'CryptoCloud',
		icon: markRaw(CryptoCloudIcon),
	},
	{
		id: 3,
		name: 'SkinPay',
		icon: markRaw(SkinPayIcon),
	}
]);

const selectedPayment = ref(1);

const isDataReady = ref(true);

</script>

<template>
	<div
		v-if="isDataReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div class="flex flex-col justify-center items-center w-full py-3 rounded-xl">
			<div class="w-[70%]">
				<p class="text-main text-[16px] ml-2">{{$t('settings.body.wallet.amount')}}</p>
				<CustomInput
					class="w-full"
					:placeholder="$t('settings.body.wallet.amount')"
					v-model="amount"
				/>
				<input
					type="range"
					:style="amount > 0 ? `background : linear-gradient(to right, #16A34A 0%, #16A34A ${amount}%, var(--color-second-background) ${amount}%, var(--color-second-background) 100%);` : '`background : var(--color-second-background); position : 0px'"
					class="w-full rounded-xl"
					v-model="amount"
				/>
				<div class="flex justify-around w-full space-x-5 mt-6">
					<div
						v-for="item in systemPayment"
						class="relative flex items-center rounded-xl my-2 cursor-pointer hover:bg-main-background-hover transition-all duration-300 ease-in-out w-64 h-32 border-black border-[1px] border-solid bg-second-background"
						@click="selectedPayment = item.id"
					>
						<input type="radio" name="radio-1" class="radio absolute right-1 top-1" :checked="item.id == selectedPayment"/>
						<component :is="item.icon" class="m-2"/>
					</div>
				</div>
				<div class="flex justify-center items-center mt-6">
					<button class="bg-green-600 text-white w-24 py-2 rounded-xl">
						{{$t('settings.body.wallet.pay')}}
					</button>
					<p class="text-[16px] ml-2">{{$t('settings.body.wallet.to_pay')}}: {{amount}}</p>
				</div>
			</div>
		</div>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>
input[type=range]{
	-webkit-appearance: none;
	cursor: pointer;
}

input[type=range]::-webkit-slider-runnable-track {
	height: 5px;
}

input[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	height: 16px;
	width: 16px;
	border-radius: 9999px;
	background: #16A34A;
	margin-top: -6px;
}
</style>