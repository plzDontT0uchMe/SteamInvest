<script setup>

import {ref} from "vue";
import axios from "@/axios/index.js";
import CustomInput from "@/components/CustomInput.vue";

const assets = ref({
	'market1': {
		id: 1,
		name: 'Market 1',
		api: 'http://market1.com/123123'
	},
	'market2': {
		id: 2,
		name: 'Market 2',
		api: 'http://market2.com/123123'
	},
	'market3': {
		id: 3,
		name: 'Market 3',
		api: 'http://market3.com/123123'
	},
	'market4': {
		id: 4,
		name: 'Market 4',
		api: 'http://market4.com/123123'
	},
	'market5': {
		id: 5,
		name: 'Market 5',
		api: 'http://market5.com/123123'
	}
});

console.log(assets.value)

const isAssetsReady = ref(true);

</script>

<template>
	<div
		v-if="isAssetsReady"
		class="flex flex-col justify-center items-center w-[80%] my-6"
	>
		<div
			class="w-full"
			v-for="item in assets"
		>
			<CustomInput
				class="w-full"
				:label="'Введите api-ключ для ' + item.name"
				:model-value="item.api"
			/>
		</div>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>