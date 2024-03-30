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
</script>

<template>
	<div class="avatar mask mask-circle" :class="{ 'placeholder' : !showAvatar }">
		<img :src="user?.avatar" v-if="showAvatar" />
		<div class="whitespace-nowrap font-semibold bg-pink-500 h-full w-full text-gray-300 rounded-full" :class="textClass" v-else>
			{{ user?.nametag.trim().toUpperCase()[0] }}
		</div>
	</div>
</template>