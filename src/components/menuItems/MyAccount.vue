<script setup>
import {onMounted, ref, watch} from "vue";
import axios from "@/axios";
import MyAccountSpoiler from "@/components/menuItems/MyAccountSpoiler.vue";
import PreviewProfile from "@/components/menuItems/PreviewProfile.vue";

const assets = ref(null);
const isAssetsReady = ref(false);

const getImages = (async () => {
    try{
        const resp = await axios.get('/api/user/assets');
	    if(!resp?.data?.success) throw Error('Ошибка!');
        assets.value = resp['data']['data'];
        isAssetsReady.value = true;
    }
    catch (e){
        console.log(e);
    }
})

onMounted(() => {
    getImages();
})

const selectedAvatar = ref(undefined)

watch(() => selectedAvatar.value, () => console.log(selectedAvatar.value))

const selectedBackground = ref(undefined)

</script>

<template>
    <MyAccountSpoiler
        v-if="isAssetsReady"
        :header="$t('settings.body.my_account.avatars')"
        type="avatar"
        v-model:assets="assets['avatar']"
        v-model:selectedAsset="selectedAvatar"
    />
    <MyAccountSpoiler
	    v-if="isAssetsReady"
        :header="$t('settings.body.my_account.backgrounds')"
        type="background"
        v-model:assets="assets['background']"
	    v-model:selectedAsset="selectedBackground"
    />
	<PreviewProfile
		v-if="isAssetsReady"
		:avatar="selectedAvatar?.url"
		:background="selectedBackground?.url"
	/>
	<button v-else class="btn btn-square bg-[#1D1D1D] hover:bg-[#1D1D1D]">
		<span class="loading loading-spinner"></span>
	</button>
</template>

<style scoped>

</style>