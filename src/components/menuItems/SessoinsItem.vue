<script setup>

import PCIcon from "@/components/menuIcons/PCIcon.vue";
import MobileIcon from "@/components/menuIcons/MobileIcon.vue";

const props = defineProps({
	item: {
		type: Object
	}
});

</script>

<template>
<div class="flex py-2 px-6 my-2 rounded-xl bg-second-background">
	<div class="flex justify-center items-center" v-if="item.type == 'pc'">
		<PCIcon class="w-8 h-8"/>
	</div>
	<div class="flex justify-center items-center" v-if="item.type == 'mobile'">
		<MobileIcon class="w-8 h-8"/>
	</div>
	<div class="flex flex-col w-full pl-4">
		<div class="text-main">{{item.browser}}</div>
		<div class="flex justify-between items-center w-full">
			<div class="tooltip" data-tip="Текущее IP">{{item.ipCurrent}}</div>
			<div>{{item.dateCurrent}}</div>
		</div>
		<div class="flex justify-between items-center w-full">
			<div class="tooltip" data-tip="Созданное IP">{{item?.ipCreate}}</div>
			<div>{{item?.dateCreate}}</div>
		</div>
	</div>
</div>
</template>

<style scoped>

</style>