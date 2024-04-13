<script setup>
import { computed } from 'vue';

const props = defineProps({
	user: {
		type: Object
	},
	textClass: {
		type: String,
		default: 'text-3xl'
	}
});

const showAvatar = computed(() => props?.user?.avatar);

const randomRGB = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

</script>

<template>
	<div class="avatar mask mask-circle" :class="{ 'placeholder' : !showAvatar }">
		<img :src="user?.avatar" v-if="showAvatar" />
		<div class="whitespace-nowrap font-semibold h-full w-full text-gray-300 rounded-full" :style="{'background' : randomRGB() }" :class="textClass" v-else>
			{{ user?.nametag.trim().toUpperCase()[0] }}
		</div>
	</div>
</template>