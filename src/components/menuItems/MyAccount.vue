<script setup>
import {computed, onMounted, ref} from "vue";
import AvatarPreview from "@/components/menuPreviews/AvatarPreview.vue";
import NewAvatarIcon from "@/components/menuIcons/NewAvatarIcon.vue";
import axios from "@/axios";

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
const displayImagesAvatar = computed(() => {
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
const setImage = (img) => {
    selectedImage.value = img;
    updateIndexImage();
}
const deleteImage = (img) => {
    images.value = images.value.filter((item) => item.url !== img.url)
    console.log(indexDisplayImage.value)
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
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="self-start text-[24px] text-white">Мой аккаунт</div>
        <div class="w-full rounded-3xl h-1 bg-black opacity-25"></div>
        <div class="text-[24px] mt-6 mb-6">Аватарки</div>
        <div class="flex flex-row justify-around items-center w-full select-none">

            <button class="text-3xl hover:scale-110 hover:opacity-50 transition-all delay-75"
                    :disabled="indexDisplayImage === 1 || Object.keys(images).length === 2"
                    :class="{'opacity-0' : indexDisplayImage === 1 || Object.keys(images).length === 2}"
                    @click="indexDisplayImage--"
            >
                <
            </button>

            <input type="file" ref="myFile" accept="image/png, image/jpeg, image/gif" hidden @change="loadImage">

            <!--- <TransitionGroup name="list" tag="div" class="flex justify-around items-center flex-nowrap w-full"> --->
                <template
                    v-for="img in displayImagesAvatar"
                    :key="img.id"
                >
                    <div v-if="img?.create" @click="myFile.click" class="btn btn-square btn-outline btn-sm flex justify-center items-center w-32 h-32">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div v-else-if="img?.empty" class="w-32 h-32"></div>
                    <div v-else class="relative">
                        <img class="w-32 h-32 cursor-pointer hover:scale-110 hover:opacity-50 transition-all delay-75"
                             :src="img.url"
                             :class="{'scale-110 outline': img === selectedImage}"
                             @click="setImage(img)"
                        >
                        <div v-if="img?.isLoading" class="absolute left-0 flex justify-between items-center w-full h-10 mt-3">
                            <button class="btn btn-outline btn-success btn-sm" @click="downloadImage(img)">
                                Загрузить
                            </button>
                            <button class="btn btn-square btn-outline btn-error btn-sm" @click="deleteImage(img)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                </template>
            <!--- </TransitionGroup> --->

            <button class="text-3xl hover:scale-110 hover:opacity-90 transition-all delay-75"
                    :disabled="indexDisplayImage === Object.keys(images).length - 2 || Object.keys(images).length === 2"
                    :class="{'opacity-0' : indexDisplayImage === Object.keys(images).length - 2 || Object.keys(images).length === 2}"
                    @click="indexDisplayImage++">
                >
            </button>

        </div>

        <!---<AvatarPreview v-model="newImageAvatar" v-if="isChangeImage" />--->

    </div>
</template>

<style scoped>

</style>