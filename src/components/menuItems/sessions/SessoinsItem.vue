<script setup>

import PCIcon from "@/components/menuIcons/PCIcon.vue";
import MobileIcon from "@/components/menuIcons/MobileIcon.vue";
import {ref} from "vue";
import ErrorIcon from "@/components/menuIcons/ErrorIcon.vue";

const props = defineProps({
	session: {
		type: Object
	},
	static: {
		type: Boolean,
		default: false
	}
});

const isHover = ref(false);

const emits = defineEmits(['delete']);

</script>

<template>
<div class="flex py-2 px-6 my-2 rounded-xl bg-second-background" @mouseover="isHover = true" @mouseleave="isHover = false">
	<div class="flex justify-center items-center" v-if="session?.type == 'pc'">
		<PCIcon class="w-8 h-8"/>
	</div>
	<div class="flex justify-center items-center" v-if="session?.type == 'mobile'">
		<MobileIcon class="w-8 h-8"/>
	</div>
	<div class="flex flex-col w-full pl-4">
		<div class="text-main">{{ session?.browser }}</div>
		<div v-if="session?.country">{{ session?.country }}, {{ session?.city }}</div>
		<div class="flex justify-between items-center">
			<div class="flex flex-col mr-2">
				<div class="tooltip" data-tip="Текущее IP">{{ session?.current_ip }}</div>
				<div class="tooltip" data-tip="Созданное IP">{{ session?.create_ip }}</div>
			</div>
			<div class="flex flex-col ml-2" v-if="!isHover || static">
				<div>{{ session?.current_date }}</div>
				<div>{{ session?.create_date }}</div>
			</div>
		</div>
	</div>
	<div class="cursor-pointer hover:opacity-50 active:scale-95" v-if="isHover && !static">
		<ErrorIcon class="w-full h-full" @click="$emit('delete', session)"/>
	</div>
</div>
</template>

<style scoped>

</style>