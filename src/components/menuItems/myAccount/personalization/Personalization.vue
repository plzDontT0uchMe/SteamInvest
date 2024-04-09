<script setup>
import {onMounted, ref, watch} from "vue";
import axios from "@/axios/index.js";
import PersonalizationSpoiler from "@/components/menuItems/myAccount/personalization/PersonalizationSpoiler.vue";
import PreviewProfile from "@/components/menuItems/myAccount/personalization/PreviewProfile.vue";
import MenuButtons from "@/components/menuItems/MenuButtons.vue";

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

const selectedBackground = ref(undefined)

</script>

<template>
	<div
		v-if="isAssetsReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<PersonalizationSpoiler
			:header="$t('settings.body.my_account.avatars')"
			type="avatar"
			v-model:assets="assets['avatar']"
			v-model:selectedAsset="selectedAvatar"
		/>
		<PersonalizationSpoiler
			:header="$t('settings.body.my_account.backgrounds')"
			type="background"
			v-model:assets="assets['background']"
			v-model:selectedAsset="selectedBackground"
		/>
		<PreviewProfile
			:avatar="selectedAvatar?.url"
			:background="selectedBackground?.url"
		/>
		<MenuButtons />
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>