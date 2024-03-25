<script setup>
import {onMounted, ref} from "vue";
import axios from "@/axios";
import MyAccountSpoiler from "@/components/menuItems/MyAccountSpoiler.vue";

const assets = ref(null);

const isAssetsReady = ref(false);

const getImages = (async () => {
    try{
        const resp = await axios.get('/api/user/assets');
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

</script>

<template>
    <div class="flex flex-col items-center">
        <div class="self-start text-[24px] text-white">Мой аккаунт</div>
        <div class="w-full rounded-3xl h-1 bg-black opacity-25"></div>
        <MyAccountSpoiler v-if="isAssetsReady"
            header="Аватарки"
            v-model="assets['avatar']"
            title="avatar"
        />
        <button v-else class="btn btn-square bg-[#1D1D1D] hover:bg-[#1D1D1D]">
            <span class="loading loading-spinner"></span>
        </button>


    </div>
</template>

<style scoped>

</style>