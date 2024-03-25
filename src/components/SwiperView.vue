<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

const array = ref([
]);

const onSlideChange = (e) => {
	console.log('slide changed')
	console.log(e)
}

onMounted(() => {
	for(let i = 0; i < 10; i++) {
		array.value.push(i);
	}
});
</script>

<template>
	<swiper
		:navigation="true"
		:slidesPerView="3"
		:spaceBetween="10"
		:modules="[Navigation]"
		class="swiper"
		@swiperslidechange="onSlideChange"
		:centeredSlides="true"
  		:centeredSlidesBounds="true"
		:slideToClickedSlide="true"
	>
		<swiper-slide v-for="item in array" :key="item" class="swiper-slide">
			<div>
				<div class="bg-blue-900 h-[300px]" :class="`w-[700px]`">
					{{ item }}
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<style>
.swiper {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>