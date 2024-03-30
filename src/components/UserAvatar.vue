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

const showAvatar = computed(() => props?.user?.avatar != null)
</script>

<template>
	<div class="avatar" :class="{ 'placeholder' : !showAvatar }">
		<img :src="user?.avatar" v-if="showAvatar" class="rounded-full" />
		<div class="whitespace-nowrap font-semibold bg-pink-500 h-full w-full text-gray-300 rounded-full" :class="textClass" v-else>
			{{ user?.nametag.trim().toUpperCase()[0] }}
		</div>
	</div>
</template>