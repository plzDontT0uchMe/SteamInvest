<script setup>
import {computed, onMounted, ref, watch} from "vue";
import axios from "@/axios/index.js";
import SuccessIcon from "@/components/menuIcons/SuccessIcon.vue";
import ArrowButton from "@/components/slider/ArrowButton.vue";
import SliderScroll from "@/components/slider/SliderScroll.vue";

const slides = defineModel('slides', {
    default: []
})

const props = defineProps({
    title: {
        type: String
    },
    countDisplaySlides: {
        type: Number
    }
})
</script>

<template>
    <div class="flex justify-around items-center w-full select-none">

        <ArrowButton />

        <SliderScroll v-model:slides="slides"
           :countDisplaySlides="countDisplaySlides"
        />

        <ArrowButton class="rotate-180" />

    </div>
</template>

<style scoped>

</style>