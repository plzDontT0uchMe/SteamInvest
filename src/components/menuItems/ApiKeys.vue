<script setup>

import {ref} from "vue";
import axios from "@/axios/index.js";

const assets = ref(null);
const isAssetsReady = ref(true);

assets.value = {

}

</script>

<template>
	<div
		v-if="isAssetsReady"
		class="flex flex-col justify-center items-center w-full"
	>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>