<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import SuccessIcon from "@/components/menuIcons/SuccessIcon.vue";
import axios from "@/axios/index.js";
import ModalConfirm from "@/components/ModalConfirm.vue";

const props = defineProps({
    header: {
        type: String
    },
	title: {
		type: String
	}
})

const assets = defineModel({
    default: []
})

const selectedAsset = ref(0);
const hoverAsset = ref(0);
const myFile = ref();
const isDragAsset = ref(false);
const loadAsset = (event) => {
	const file = event.target.files[0];
	const asset = {
		url: URL.createObjectURL(file),
		file: file,
		isLoading: true,
		progress: 0
	}
	assets.value.unshift(asset);
	setAsset(asset);
	myFile.value.value = ''
}
const dropAsset = (event) => {
	isDragAsset.value = false;
	const file = event.dataTransfer.files[0];
	const asset = {
		url: URL.createObjectURL(file),
		file: file,
		isLoading: true,
		progress: 0
	}
	assets.value.unshift(asset);
	setAsset(asset);
	myFile.value.value = ''
}
const setAsset = (item) => {
	selectedAsset.value = item;
}
const deleteLocalAsset = (asset) => {
	URL.revokeObjectURL(asset.url)
	assets.value = assets.value.filter((item) => item.url !== asset.url)
}
const deleteAsset = async (asset) => {
	try{
		const resp = await axios.delete(`/api/user/assets/${asset.id}`);
		assets.value = resp.data.data[props.title];
	}
	catch (e){
		console.log(e);
	}
}
const downloadAsset = async (asset) => {
	const data = new FormData();
	data.append('asset', asset.file);
	data.append('type', 'avatar');
	try{
		const resp = await axios.post('/api/user/assets', data, {
			onUploadProgress: progressEvent => asset.progress = progressEvent.progress * 100
		});
		assets.value = resp.data.data[props.title];
	}
	catch (e){
		console.log(e);
	}
}

const modal = ref({
	show: false,
	action: null,
	header: null,
	body: null,
	footer: null
});
const modalAction = (async () => {
	modal.value.show = false;
	switch (modal.value.action){
		case 'delete':{
			await deleteAsset(modal.value.body)
			break;
		}
		case 'download':{
			await downloadAsset(modal.value.body)
			break;
		}
	}
})
const showModal = (action, header, body, footer) => {
	modal.value = {
		show: true,
		action: action,
		header: header,
		body: body,
		footer: footer
	}
}
const getStyle = (element, type) =>
{
	const styles = {
		'button': {
			'download' : 'bg-green-600 hover:bg-green-700',
			'delete' : 'bg-red-600 hover:bg-red-700'
		}
	};
	return styles[element][type];
}

</script>

<template>
	<input type="file" ref="myFile" accept="image/png, image/jpeg, image/gif" hidden @change="loadAsset">
    <div class="text-[24px] mt-6">{{ header }}</div>
    <swiper
        :navigation="true"
        :slidesPerView="3"
        :spaceBetween="10"
        :modules="[Navigation]"
        class="swiper"
        :centeredSlides="true"
        :centeredSlidesBounds="true"
        :slideToClickedSlide="true"
    >
	    <swiper-slide>
		    <div
		         class="btn btn-square btn-outline btn-sm flex justify-center items-center w-32 h-32"
		         :class="{'opacity-50 scale-110 border-dashed': isDragAsset}"
		         draggable="true"
		         @click="myFile.click"
		         @drop.prevent="dropAsset"
		         @dragover.prevent="isDragAsset = true"
		         @dragleave.prevent="isDragAsset = false"
		    >
			    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
		    </div>
	    </swiper-slide>

        <swiper-slide class="swiper-slide"
	        v-for="item in assets"
            :key="item">

	        <div class="relative">

		        <div @mouseover="hoverAsset === null ? hoverAsset = item.url : hoverAsset" @mouseleave="hoverAsset = null">

			        <img
				        class="w-32 h-32 rounded-lg cursor-pointer hover:opacity-50 transition-all delay-75"
				        :src="item.url"
				        :class="{'scale-110 outline': item === selectedAsset && !item?.progress > 0, 'opacity-50': item?.progress > 0, 'scale-110': item.url === hoverAsset}"
				        @click="setAsset(item)"
				        alt="image"
			        >

			        <transition name="show">
				        <div v-show="hoverAsset === item.url && !item?.isLoading" class="absolute top-[-6px] right-[-6px]">
					        <button class="btn btn-square btn-outline btn-xs btn-error"
					                @click="showModal('delete', 'Вы действительно хотите удалить?', item, ['Отменить', 'Удалить'])">
						        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
					        </button>
				        </div>
			        </transition>

		        </div>

		        <div v-if="item?.progress > 0"
		             class="absolute left-0 bottom-0 rounded-lg w-full bg-[#00A872] transition-all delay-75"
		             :style="{height: item?.progress + '%'}"
		        >
			        <p class="absolute left-0 bottom-0 flex justify-center items-center text-white w-32 h-32">
				        {{item?.progress.toFixed()}}%
			        </p>
		        </div>

		        <div v-if="item?.isLoading" class="absolute left-0 flex justify-between items-center w-full h-10 mt-3">
			        <button v-if="item?.progress === 0"
			                class="btn btn-outline btn-success btn-sm w-[70%]"
			                @click="showModal('download', 'Вы действительно хотите загрузить?', item, ['Отменить', 'Загрузить'])"
			        >
				        Загрузить
			        </button>
			        <button v-else-if="item?.progress > 0 && item?.progress < 100" class="btn btn-outline btn-success btn-sm w-[70%]">
				        <span class="loading loading-spinner text-success"></span>
			        </button>
			        <button v-if="item?.progress === 100" class="btn btn-outline btn-success btn-sm w-[70%] disabled">
				        <SuccessIcon />
			        </button>
			        <button class="btn btn-square btn-outline btn-error btn-sm" @click="deleteLocalAsset(item)">
				        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
			        </button>
		        </div>

	        </div>
        </swiper-slide>

	    <swiper-slide class="swiper-slide w-36 h-36">
		    <div class="w-32 h-32"></div>
	    </swiper-slide>
    </swiper>

	<ModalConfirm v-if="modal.show">
		<template v-slot:header>
			<div class="flex justify-center items-center text-xl mb-6">
				<p>{{ modal.header }}</p>
			</div>
		</template>
		<template v-slot:body>
			<div class="flex justify-center items-center w-64 h-64 mb-6">
				<img :src="modal.body.url">
			</div>
		</template>
		<template v-slot:footer>
			<div class="flex justify-center items-center">
				<button
					class="bg-gray-500 p-2 rounded-xl mr-2 text-white"
					@click="modal.show = false"
				>
					{{ modal.footer[0] }}
				</button>
				<button
					class="bg-gray-500 p-2 rounded-xl ml-2 text-white"
					@click="modalAction"
					:class="getStyle('button', modal.action)"
				>
					{{ modal.footer[1] }}
				</button>
			</div>
		</template>
	</ModalConfirm>
</template>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
	display: flex;
    justify-content: center;
    align-items: center;
}

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