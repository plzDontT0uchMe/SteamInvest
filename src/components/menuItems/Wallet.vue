<script setup>

import WalletIcon from "@/components/menuIcons/WalletIcon.vue";
import {ref} from "vue";

const balance = ref('100$');

</script>

<template>
	<div
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div class="flex justify-center items-center">
			<WalletIcon class="w-6 h-6" />
			<p class="ml-2 text-lg text-main">Баланс: {{ balance }}</p>
		</div>
	</div>
</template>

<style scoped>

</style>