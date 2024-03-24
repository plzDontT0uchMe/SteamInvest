<script setup>
import {onMounted, ref} from "vue";
import axios from "@/axios";
import ImageSlider from "@/components/ImageSlider.vue";
import Slider from "@/components/slider/Slider.vue";

const images = ref(null);

const isImagesReady = ref(false);

const getImages = (async () => {
    try{
        const resp = await axios.get('/api/user/assets');
        images.value = resp['data']['data'];
        images.value['avatar'] = images.value['avatar'].slice(0,10);
        isImagesReady.value = true;
        //console.log(resp)
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
        <div class="text-[24px] mt-6 mb-6">Аватарки</div>

        <Slider v-if="isImagesReady"
            v-model:slides="images['avatar']"
            title="avatar"
            :countDisplaySlides="3"
        />
        <button v-else class="btn btn-square bg-[#1D1D1D] hover:bg-[#1D1D1D]">
            <span class="loading loading-spinner"></span>
        </button>


    </div>
</template>

<style scoped>
.show-enter-active,
.show-leave-active {
    transition: scale 0.3s ease-in-out;
    transition-delay: 0.2s;
}

.show-enter-from,
.show-leave-to {
    transition-delay: 0s;
    scale: 0;
}
</style>