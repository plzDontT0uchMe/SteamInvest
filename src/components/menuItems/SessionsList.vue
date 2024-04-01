<script setup>

import SessoinsItem from "@/components/menuItems/SessoinsItem.vue";

const props = defineProps({
	name: {
		type: String
	}
});

const assets = defineModel('assets', {
	default: []
});

</script>

<template>
<div class="flex flex-col justify-between items-center w-[70%]">
	<div class="text-[24px] text-main mt-6 ml-6 cursor-pointer select-none">
		{{ name }}
	</div>
	<div class="w-full max-h-[300px] overflow-y-auto">
		<SessoinsItem
			v-for="(item, index) in assets"
			:key="index"
			:item="item"
		/>
	</div>
</div>
</template>

<style scoped>

</style>