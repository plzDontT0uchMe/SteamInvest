<script setup>

const props = defineProps({
	item: {
		type: Object
	}
})

</script>

<template>
<div class="flex flex-col justify-center items-center bg-main-background rounded-xl py-2 px-4">
	<div class="text-center text-main">{{ item.name }}</div>
	<div class="flex flex-col">
		<div
			v-for="possibilities in item.possibilities"
			class="text-[14px]"
		>
			{{ possibilities }}
		</div>
	</div>
	<div class="text-center">{{ item.price }}</div>
	<button class="bg-green-600 hover:opacity-75 py-2 px-6 rounded-xl text-main" v-if="!item.is_active">Купить</button>
	<button disabled class="bg-second-background py-2 px-6 rounded-xl text-main" v-else>Выбран</button>
</div>
</template>

<style scoped>

</style>