<script setup>
import SliderItem from "@/components/slider/SliderItem.vue";
import {computed, onMounted, onUnmounted, reactive, ref, watch} from "vue";

const slides = defineModel('slides', {
    default: []
})

const props = defineProps({
    countDisplaySlides: {
        type: Number
    }
})

const mouse = reactive({
    x: 0,
    offset: 0
})

const isScroll = ref(false)

const setPosition = (event) => {
    isScroll.value = true;
    mouse.x = event.x;
}

const changePosition = (event) => {
    if(isScroll.value){
        scroll.value.scrollLeft = (mouse.x + mouse.offset) - event.x;
    }
}

const mouseUp = (event) => {
    const maxScrollLeft = scroll.value.scrollWidth - scroll.value.clientWidth;
    isScroll.value = false;
    mouse.offset += mouse.x - event.x;
    if(mouse.offset < 0) mouse.offset = 0;
    if(mouse.offset > maxScrollLeft) mouse.offset = maxScrollLeft;
}

onMounted(() => {
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mousemove', changePosition);
})

onUnmounted(() => {
    window.removeEventListener('mouseup', mouseUp);
    window.removeEventListener('mousemove', changePosition);
})

const scroll = ref(null);

const spaceBetween = computed(() => {
    return (scroll.value ? (scroll.value.clientWidth - (props.countDisplaySlides * 128)) / (props.countDisplaySlides - 1) : 0) + 'px';
})

</script>

<template>
    <div class="scroll flex overflow-auto"
         ref="scroll"
         @mousedown="setPosition"
    >
        <SliderItem>
            <div class="btn btn-square btn-outline btn-sm flex justify-center items-center w-32 h-32">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
        </SliderItem>

        <SliderItem
            v-for="slide in slides"
            :key="slide.id"
        >
            <img
                class="w-32 min-w-32 h-32 min-h-32 rounded-lg cursor-pointer hover:opacity-50 transition-all delay-75"
                draggable="false"
                :src="slide.url"
                alt="image"
            >
        </SliderItem>

        <SliderItem>
            <div class="flex justify-center items-center w-32 min-w-32 h-32"></div>
        </SliderItem>

    </div>
</template>

<style scoped>
.scroll > :not([hidden]) ~ :not([hidden]) {
    margin-left: v-bind(spaceBetween);
}

</style>