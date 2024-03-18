<script setup>
import {computed, onMounted, ref, watchEffect} from "vue";
import axios from "@/axios";
import ModalConfirm from "@/components/ModalConfirm.vue";

const images = ref([
    {
        id: 0,
        url: '/src/assets/images/1.jpg',
        isActive: false
    },
    {
        id: 3,
        url: '/src/assets/images/2.png',
        isActive: false
    },
    {
        id: 5,
        url: '/src/assets/images/steamInvestAbout.png',
        isActive: false,
    },
    {
        id: 7,
        url: '/src/assets/images/1.jpg',
        isActive: false
    },
    {
        id: 9,
        url: '/src/assets/images/2.png',
        isActive: false
    },
    {
        id: 11,
        url: '/src/assets/images/steamInvestAbout.png',
        isActive: false
    }
]);

const selectedImage = ref(0);

const hoverImage = ref(null);

onMounted(() => {
    initImages();
})

const indexDisplayImage = ref(0);
const countDisplayImages = 3;
const initImages = () => {
    images.value.unshift({id:-1, isActive: false, create: true});
    selectedImage.value = images.value.find((item) => item.isActive);
    images.value.push({id:-2, isActive: false, empty: true});
    updateIndexImage();
}
const updateIndexImage = () => {
    indexDisplayImage.value = images.value.indexOf(selectedImage.value);
    if(indexDisplayImage.value === -1) {
        if(images.value.length === 2)
            indexDisplayImage.value = -1;
        else
            indexDisplayImage.value = 1;
    }
}
const displayImages = computed(() => {
    if(indexDisplayImage.value !== 0)
        return images.value.slice(indexDisplayImage.value - 1, indexDisplayImage.value - 1 + countDisplayImages);
    else
        return images.value.slice(indexDisplayImage.value, indexDisplayImage.value + countDisplayImages - 1);
});

const myFile = ref();
const loadImage = (event) => {
    const file = event.target.files[0];
    const img = {
        url: URL.createObjectURL(file),
        file: file,
        isLoading: true,
        progress: 0
    }
    images.value.splice(1,0, img);
    setImage(img);
    myFile.value.value = ''
}
const dropImage = (event) => {
    event.target.classList.remove(['opacity-50'], ['scale-110'], ['cursor-pointer'])
    const file = event.dataTransfer.files[0];
    const img = {
        url: URL.createObjectURL(file),
        file: file,
        isLoading: true,
        progress: 0
    }
    images.value.splice(1,0, img);
    setImage(img);
    myFile.value.value = ''
}
const setImage = (img) => {
    selectedImage.value = img;
    updateIndexImage();
}
const deleteLocalImage = (img) => {
    URL.revokeObjectURL(img.url)
    images.value = images.value.filter((item) => item.url !== img.url)
    updateIndexImage();
}
const deleteImage = (img) => {
    URL.revokeObjectURL(img.url)
    images.value = images.value.filter((item) => item.url !== img.url)
    updateIndexImage();
}
const downloadImage = async (img) => {
    const data = new FormData();
    data.append('asset', img.file);
    data.append('type', 'avatar');
    try{
        const resp = await axios.post('/api/user/assets', data, {
            onUploadProgress: progressEvent => img.progress = progressEvent.progress * 100
        });
        console.log(img.progress)
        console.log(resp);
    }
    catch (e){
        console.log(e);
    }
}

const modal = ref({
    show: false,
    confirm: false,
    img: null,
    text: null,
    action: null,
    buttons: null
});
const showModal = (img, text, action, buttons) => {
    modal.value = {
        show: true,
        confirm: false,
        img: img,
        text: text,
        action: action,
        buttons: buttons
    }
}
watchEffect(async () => {
    if(modal.value.confirm){
        switch (modal.value.action){
            case 'delete':{
                deleteImage(modal.value.img)
                break;
            }
            case 'download':{
                await downloadImage(modal.value.img)
                break;
            }
        }
    }
})
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="self-start text-[24px] text-white">Мой аккаунт</div>
        <div class="w-full rounded-3xl h-1 bg-black opacity-25"></div>
        <div class="text-[24px] mt-6 mb-6">Аватарки</div>
        <div class="flex flex-row justify-around items-center w-full select-none">

            <button
                class="text-3xl hover:scale-110 hover:opacity-50 transition-all delay-75"
                :disabled="indexDisplayImage === 1 || Object.keys(images).length === 2"
                :class="{'opacity-0' : indexDisplayImage === 1 || Object.keys(images).length === 2}"
                @click="indexDisplayImage--"
            >
                <
            </button>

            <input type="file" ref="myFile" accept="image/png, image/jpeg, image/gif" hidden @change="loadImage">

            <!--- <TransitionGroup name="list" tag="div" class="flex justify-around items-center flex-nowrap w-full"> --->
                <template
                    v-for="img in displayImages"
                    :key="img.id"
                >
                    <div v-if="img?.create"
                        class="btn btn-square btn-outline btn-sm flex justify-center items-center w-32 h-32"
                        draggable="true"
                        @click="myFile.click"
                        @drop.prevent="dropImage"
                        @dragover.prevent="$event.target.classList.add(['opacity-50'], ['scale-110'], ['cursor-pointer'])"
                        @dragleave.prevent="$event.target.classList.remove(['opacity-50'], ['scale-110'], ['cursor-pointer'])"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>

                    <div v-else-if="img?.empty" class="w-32 h-32"></div>

                    <div v-else class="relative">

                        <div @mouseover="hoverImage === null ? hoverImage = img.url : hoverImage" @mouseleave="hoverImage = null">

                            <img
                                class="w-32 h-32 rounded-lg cursor-pointer hover:scale-110 hover:opacity-50 transition-all delay-75"
                                :src="img.url"
                                :class="{'scale-110 outline': img === selectedImage && !img?.isLoading, 'scale-100 outline': img?.isLoading, 'opacity-50': img?.progress > 0}"
                                @click="setImage(img)"
                                alt="image"
                            >

                            <div v-show="hoverImage === img.url && !img?.isLoading" class="absolute top-[-17px] right-[-17px]">
                                <button class="btn btn-circle btn-outline btn-xs btn-error"
                                        @click="showModal(img, 'Вы действительно хотите удалить?', 'delete', ['Отменить', 'Удалить'])">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                        </div>

                        <div v-if="img?.progress > 0"
                             class="absolute left-0 bottom-0 rounded-lg w-full bg-[#00A872] transition-all delay-75"
                             :style="{height: img?.progress + '%'}"
                        >
                            <p class="absolute left-0 bottom-0 flex justify-center items-center text-white w-32 h-32">
                                {{img?.progress.toFixed()}}%
                            </p>
                        </div>

                        <div v-if="img?.isLoading" class="absolute left-0 flex justify-between items-center w-full h-10 mt-3">
                            <button v-if="img?.progress === 0"
                                class="btn btn-outline btn-success btn-sm w-[70%]"
                                @click="showModal(img, 'Вы действительно хотите загрузить?', 'download', ['Отменить', 'Загрузить'])"
                            >
                                Загрузить
                            </button>
                            <button v-else-if="img?.progress > 0 && img?.progress < 100" class="btn btn-outline btn-success btn-sm w-[70%]">
                                <span class="loading loading-spinner text-success"></span>
                            </button>
                            <button v-if="img?.progress === 100" class="btn btn-outline btn-success btn-sm w-[70%] disabled">
                                ✓
                            </button>
                            <button class="btn btn-square btn-outline btn-error btn-sm" @click="deleteLocalImage(img)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                    </div>

                </template>
            <!--- </TransitionGroup> --->

            <button
                class="text-3xl hover:scale-110 hover:opacity-90 transition-all delay-75"
                :disabled="indexDisplayImage === Object.keys(images).length - 2 || Object.keys(images).length === 2"
                :class="{'opacity-0' : indexDisplayImage === Object.keys(images).length - 2 || Object.keys(images).length === 2}"
                @click="indexDisplayImage++"
            >
                >
            </button>

        </div>

        <ModalConfirm v-model="modal" v-if="modal.show && !modal.confirm" />
    </div>
</template>

<style scoped>

</style>