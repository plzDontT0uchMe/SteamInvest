<script setup>
import {onMounted, ref, watch} from "vue";
import axios from "@/axios";
import MyAccountSpoiler from "@/components/menuItems/MyAccountSpoiler.vue";
import PreviewProfile from "@/components/menuItems/PreviewProfile.vue";

const assets = ref(null);
const isAssetsReady = ref(false);

const getAssets = (async () => {
	isAssetsReady.value = false;
    try{
        const resp = await axios.get('/api/user/assets');
	    if(resp?.data?.success)
		    assets.value = resp['data']['data'];
	    else
		    throw Error('Ошибка!');
    }
    catch (e){
        console.log(e);
    }
	finally {
	    isAssetsReady.value = true;
    }
})

onMounted(() => {
	getAssets();
})

const selectedAvatar = ref(undefined)

watch(() => selectedAvatar.value, () => console.log(selectedAvatar.value))

const selectedBackground = ref(undefined)

</script>

<template>
	<div
		v-if="isAssetsReady"
		class="flex flex-col justify-center items-center w-full"
	>
		<MyAccountSpoiler
			:header="$t('settings.body.my_account.avatars')"
			type="avatar"
			v-model:assets="assets['avatar']"
			v-model:selectedAsset="selectedAvatar"
		/>
		<MyAccountSpoiler
			:header="$t('settings.body.my_account.backgrounds')"
			type="background"
			v-model:assets="assets['background']"
			v-model:selectedAsset="selectedBackground"
		/>
		<PreviewProfile
			:avatar="selectedAvatar?.url"
			:background="selectedBackground?.url"
		/>
		<div
			class="flex justify-end items-center w-full mr-24 mb-6">
			<button
				class="bg-second-background hover:opacity-75 active:scale-90 py-3 px-7 rounded-xl mr-2 text-white"
			>
				{{ $t('settings.footers.actions.cansel') }}
			</button>
			<button
				class="bg-green-600 hover:opacity-75 active:scale-90 py-3 px-7 rounded-xl ml-2 text-white"
			>
				{{ $t('settings.footers.actions.save') }}
			</button>
		</div>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>