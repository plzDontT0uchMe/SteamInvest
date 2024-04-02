<script setup>

import PCIcon from "@/components/menuIcons/PCIcon.vue";
import MobileIcon from "@/components/menuIcons/MobileIcon.vue";
import {ref} from "vue";
import ErrorIcon from "@/components/menuIcons/ErrorIcon.vue";

const props = defineProps({
	item: {
		type: Object
	}
});

const isHover = ref(false);

</script>

<template>
<div class="flex py-2 px-6 my-2 rounded-xl bg-second-background" @mouseover="isHover = true" @mouseleave="isHover = false">
	<div class="flex justify-center items-center" v-if="item?.type == 'pc'">
		<PCIcon class="w-8 h-8"/>
	</div>
	<div class="flex justify-center items-center" v-if="item?.type == 'mobile'">
		<MobileIcon class="w-8 h-8"/>
	</div>
	<div class="flex flex-col w-full pl-4">
		<div class="text-main">{{ item?.browser }}</div>
		<div class="flex justify-between items-center">
			<div class="flex flex-col">
				<div class="tooltip" data-tip="Текущее IP">{{ item?.ipCurrent }}</div>
				<div class="tooltip" data-tip="Созданное IP">{{ item?.ipCreate }}</div>
			</div>
			<div class="flex flex-col" v-if="!isHover">
				<div>{{ item?.dateCurrent }}</div>
				<div>{{ item?.dateCreate }}</div>
			</div>
		</div>
	</div>
	<div class="cursor-pointer " v-if="isHover">
		<ErrorIcon class="w-full h-full"/>
	</div>
</div>
</template>

<style scoped>

</style>