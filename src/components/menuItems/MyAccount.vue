<script setup>
import {computed, onMounted, ref, watchEffect} from "vue";
import axios from "@/axios";
import ModalConfirm from "@/components/ModalConfirm.vue";
import ArrowIcon from "@/components/menuIcons/ArrowIcon.vue";
import SuccessIcon from "@/components/menuIcons/SuccessIcon.vue";

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
    isDragImage.value = false;
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
    action: null,
    header: null,
    body: null,
    footer: null
});
const showModal = (action, header, body, footer) => {
    modal.value = {
        show: true,
        action: action,
        header: header,
        body: body,
        footer: footer
    }
}
const modalAction = (async () => {
    modal.value.show = false;
    switch (modal.value.action){
        case 'delete':{
            deleteImage(modal.value.body)
            break;
        }
        case 'download':{
            await downloadImage(modal.value.body)
            break;
        }
    }
})

const isDragImage = ref(false);

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
                <ArrowIcon />
            </button>

            <input type="file" ref="myFile" accept="image/png, image/jpeg, image/gif" hidden @change="loadImage">

            <!--- <TransitionGroup name="list" tag="div" class="flex justify-around items-center flex-nowrap w-full"> --->
                <template
                    v-for="img in displayImages"
                    :key="img.id"
                >
                    <div v-if="img?.create"
                        class="btn btn-square btn-outline btn-sm flex justify-center items-center w-32 h-32"
                        :class="{'opacity-50 scale-110 border-dashed': isDragImage}"
                        draggable="true"
                        @click="myFile.click"
                        @drop.prevent="dropImage"
                        @dragover.prevent="isDragImage = true"
                        @dragleave.prevent="isDragImage = false"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>

                    <div v-else-if="img?.empty" class="w-32 h-32"></div>

                    <div v-else class="relative">

                        <div @mouseover="hoverImage === null ? hoverImage = img.url : hoverImage" @mouseleave="hoverImage = null">

                            <img
                                class="w-32 h-32 rounded-lg cursor-pointer hover:opacity-50 transition-all delay-75"
                                :src="img.url"
                                :class="{'scale-110 outline': img === selectedImage && !img?.progress > 0, 'opacity-50': img?.progress > 0, 'scale-110': img.url === hoverImage}"
                                @click="setImage(img)"
                                alt="image"
                            >

                            <transition name="show">
                            <div v-show="hoverImage === img.url && !img?.isLoading" class="absolute top-[-6px] right-[-6px]">
                                <button class="btn btn-square btn-outline btn-xs btn-error"
                                        @click="showModal('delete', 'Вы действительно хотите удалить?', img, ['Отменить', 'Удалить'])">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            </transition>

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
                                @click="showModal('download', 'Вы действительно хотите загрузить?', img, ['Отменить', 'Загрузить'])"
                            >
                                Загрузить
                            </button>
                            <button v-else-if="img?.progress > 0 && img?.progress < 100" class="btn btn-outline btn-success btn-sm w-[70%]">
                                <span class="loading loading-spinner text-success"></span>
                            </button>
                            <button v-if="img?.progress === 100" class="btn btn-outline btn-success btn-sm w-[70%] disabled">
                                <SuccessIcon />
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
                <ArrowIcon class="rotate-180" />
            </button>

        </div>

        <ModalConfirm v-if="modal.show"
            :show="modal.show"
            :action="modal.action"
            :header="modal.header"
            :body="modal.body.url"
            :footer="modal.footer"
            @close="modal.show = false"
            @action="modalAction"
        >
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
                        {{modal.footer[0]}}
                    </button>
                    <button
                        class="bg-gray-500 p-2 rounded-xl ml-2 text-white"
                        @click="modalAction"
                        :class="getStyle('button', modal.action)"
                    >
                        {{modal.footer[1]}}
                    </button>
                </div>
            </template>
        </ModalConfirm>
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