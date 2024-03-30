<script setup>

import {computed} from "vue";
import UserAvatar from "@/components/UserAvatar.vue";

const props = defineProps({
	avatar: {
		type: String
	},
	background: {
		type: String
	}
})

const avatarBg = computed(() => {
	return `url(${props.avatar})`;
})

const backgroundBG = computed(() => {
	return `url(${props.background})`
})

</script>

<template>
<div class="text-[24px] text-main my-6 cursor-pointer select-none flex justify-center items-center">
	{{ $t('settings.body.my_account.preview') }}
</div>
<div class="flex flex-col items-center w-[800px] h-[450px] bg-second-background mb-6 rounded-xl">
	<div class="w-full h-[7%] skeleton rounded-b-none rounded-lg"></div>
	<div
		class="flex justify-center items-center w-[90%] h-[40%] my-4 rounded-xl"
		:class="{'skeleton' : background === undefined, 'background' : background !== undefined}"
	>
		<div
			class="w-[77px] h-[77px] rounded-full"
			:class="{'avatar' : avatar !== undefined}"
		>
			<div
				v-if="avatar === undefined"
			>
				<UserAvatar class="w-[77px] h-[77px]" :user="{ nametag : 'User', avatar : avatar }" />
			</div>
		</div>
	</div>
	<div class="w-[90%] h-[25%] skeleton my-2 rounded-xl"></div>
</div>
</template>

<style scoped>
.background {
	background: v-bind(backgroundBG) no-repeat;
	-moz-background-size: 100%;
	-webkit-background-size: 100%;
	-o-background-size: 100%;
	background-size: 100% 100%;
}
.avatar {
	background: v-bind(avatarBg) no-repeat;
	-moz-background-size: 100%;
	-webkit-background-size: 100%;
	-o-background-size: 100%;
	background-size: 100% 100%;
}
</style>