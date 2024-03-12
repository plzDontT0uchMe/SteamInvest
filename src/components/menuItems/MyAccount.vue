<script setup>
import {computed, onMounted, ref} from "vue";
import AvatarPreview from "@/components/menuPreviews/AvatarPreview.vue";
import NewAvatarIcon from "@/components/menuIcons/NewAvatarIcon.vue";
import axios from "@/axios";

const newImageAvatar = ref();
const imagesAvatar = ref([
    {
        id: 0,
        url: '/src/assets/images/1.jpg',
        isActive: true
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

onMounted(() => {
    initImagesAvatar();
})

const indexImagesAvatar = ref(0);
const countDisplayImagesAvatar = 3;
const initImagesAvatar = () => {
    imagesAvatar.value.unshift({id:-1, isActive: false, createAvatar: true});
    updateIndexImageAvatar();
    imagesAvatar.value.push({id:-2, isActive: false, emptyAvatar: true});
}
const updateIndexImageAvatar = () => {
    indexImagesAvatar.value = imagesAvatar.value.indexOf(imagesAvatar.value.find((item) => item.isActive === true));
}
const displayImagesAvatar = computed(() => {
    if(indexImagesAvatar.value !== 0)
        return imagesAvatar.value.slice(indexImagesAvatar.value - 1, indexImagesAvatar.value - 1 + countDisplayImagesAvatar);
    else
        return imagesAvatar.value.slice(indexImagesAvatar.value, indexImagesAvatar.value + countDisplayImagesAvatar - 1);
});

const myFile = ref();
const loadImage = (event) => {
    const file = event.target.files[0];
    console.log(file)
    imagesAvatar.value.splice(1,0,{
        url: URL.createObjectURL(file),
        file: file,
        isLoading: true,
        progress: 0
    });
    myFile.value.value = ''
    console.log(imagesAvatar.value)
}
const setImage = (img) => {
    imagesAvatar.value.forEach((item) => {
        item.isActive = item.id === img.id;
    })
    updateIndexImageAvatar();
}
const deleteImageAvatar = (img) => {
    imagesAvatar.value = imagesAvatar.value.filter((item) => item.url !== img.url)
}
const downloadImageAvatar = async (img) => {
    console.log(img)
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
                    :disabled="indexImagesAvatar === 1 || Object.keys(imagesAvatar).length === 2"
                    :class="{'opacity-0' : indexImagesAvatar === 1 || Object.keys(imagesAvatar).length === 2}"
                    @click="indexImagesAvatar--"
            >
                <
            </button>

            <input type="file" ref="myFile" accept="image/png, image/jpeg, image/gif" hidden @change="loadImage">

            <!--- <TransitionGroup name="list" tag="div" class="flex justify-around items-center flex-nowrap w-full"> --->
                <template
                    v-for="img in displayImagesAvatar"
                    :key="img.id"
                >
                    <div v-if="img?.createAvatar" @click="myFile.click" class="btn btn-square btn-outline btn-sm flex justify-center items-center w-32 h-32">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div v-else-if="img?.emptyAvatar" class="w-32 h-32"></div>
                    <div v-else-if="img?.isLoading" class="w-32 h-32">
                        <img class="w-32 h-32 cursor-pointer"
                             :src="img.url"
                             :class="{'scale-110 outline': img.isActive}"
                             @click="setImage(img)"
                        >
                        <div class="flex justify-between items-center w-full h-10 mt-3">
                            <div class="relative w-full w-[70%] h-8">
                                <button class="btn btn-outline btn-success btn-sm z-1" @click="downloadImageAvatar(img)">Загрузить</button>
                                <div v-if="img?.isLoading && img?.progress !== 100" class="absolute left-0 top-0 h-full bg-[#00A872] rounded-lg z-[-999] transition-all duration-1000 pr-5" :style="{width: img?.progress + '%'}" ></div>
                            </div>
                            <button class="btn btn-square btn-outline btn-error btn-sm w-[25%]" @click="deleteImageAvatar(img)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                    <img v-else class="w-32 h-32 cursor-pointer hover:scale-110 hover:opacity-50 transition-all delay-75"
                         :src="img.url"
                         :class="{'scale-110 outline': img.isActive}"
                         @click="setImage(img)"
                    >
                </template>
            <!--- </TransitionGroup> --->

            <button class="text-3xl hover:scale-110 hover:opacity-90 transition-all delay-75"
                    :disabled="indexImagesAvatar === Object.keys(imagesAvatar).length - 2 || Object.keys(imagesAvatar).length === 2"
                    :class="{'opacity-0' : indexImagesAvatar === Object.keys(imagesAvatar).length - 2 || Object.keys(imagesAvatar).length === 2}"
                    @click="indexImagesAvatar++">
                >
            </button>

        </div>

        <!---<AvatarPreview v-model="newImageAvatar" v-if="isChangeImage" />--->

    </div>
</template>

<style scoped>

</style>