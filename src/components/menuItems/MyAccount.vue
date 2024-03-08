<script setup>
import { ref } from "vue";

const image = ref();
const myFile = ref();
const setImage = (event) => {
    image.value = URL.createObjectURL(event.target.files[0])
}
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="self-start text-[24px]">Мой аккаунт</div>
        <div class="w-full h-1 bg-black opacity-25 mt-1 mb-6"></div>
        <div @click="myFile.click">
            <img
                class="w-32 h-32 rounded-full border-[1px] border-black cursor-pointer"
                :src="image"
                alt="avatar"
            >
            <input type="file" ref="myFile" hidden @change="setImage">
        </div>
        <div class="w-full h-1 bg-black opacity-25 mt-6 mb-6"></div>

    </div>
</template>

<style scoped>

</style>