<script setup>

import SessoinsItem from "@/components/menuItems/sessions/SessoinsItem.vue";

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
	<div class="flex justify-center items-center text-[24px] text-main cursor-pointer select-none">
		{{ name }}
		<slot name="afterHeader"></slot>
	</div>
	<div class="w-full max-h-[290px] overflow-y-auto">
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