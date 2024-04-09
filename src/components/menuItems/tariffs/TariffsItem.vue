<script setup>

import AcceptIcon from "@/components/menuIcons/AcceptIcon.vue";

const props = defineProps({
	tariff: {
		type: Object
	},
	possibilities: {
		type: Array
	}
})

</script>

<template>
<div class="flex flex-col justify-center items-center bg-main-background rounded-xl py-2 px-4 w-96">
	<div class="text-center text-main text-[22px] my-2">{{ tariff.name }}</div>
	<div class="flex flex-col">
		<div
			v-for="possibility in possibilities"
			class="flex justify-between items-center w-full rounded-xl my-2 p-2"
		>
			<AcceptIcon
				class="absolute flex justify-center items-center w-[16px] h-[16px] mr-4"
				:class="tariff.possibilities.includes(possibility) ? 'fill-[#16A34A]' : 'fill-main-text'"
			/>
			<p class="ml-7">{{ possibility }}</p>
		</div>
	</div>
	<div class="text-center text-main text-[20px] my-2">{{ tariff.price }}</div>
	<button class="bg-green-600 hover:opacity-75 active:scale-95 py-2 rounded-xl text-main mb-2 w-28" v-if="!tariff.is_active">{{$t('settings.body.tariffs.buy')}}</button>
	<button disabled class="bg-second-background py-2 rounded-xl text-main mb-2 w-28" v-else>{{$t('settings.body.tariffs.selected')}}</button>
</div>
</template>

<style scoped>

</style>