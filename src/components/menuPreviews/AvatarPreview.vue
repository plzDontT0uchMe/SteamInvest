<script setup>
const newImageAvatar = defineModel();
</script>

<template>
    <div class="fixed top-0 left-0 flex justify-center items-center w-screen h-screen backdrop-blur-[2px]">
        <div class="w-[50%] h-[50%] bg-black">
            <div class="flex justify-center items-center w-full h-[75%] mt-6">
                <img :src="newImageAvatar">
            </div>
            <div class="flex justify-center items-center w-full mt-6">
                <button class="bg-gray-500 p-2 rounded-2xl mr-2">Отменить</button>
                <button class="bg-gray-500 p-2 rounded-2xl ml-2">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>