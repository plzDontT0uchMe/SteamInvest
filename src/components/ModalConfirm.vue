<script setup>
const modal = defineModel();

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
    <div class="fixed top-0 left-0 flex justify-center items-center w-screen h-screen backdrop-blur-[2px]">
        <div class="p-6 bg-[#1D1D1D] border-black border-2 rounded-xl flex justify-around items-center flex-col">
            <div class="text-xl mb-6">
                <p>{{ modal.text }}</p>
            </div>
            <div class="w-64 h-64 mb-6">
                <img :src="modal.img.url">
            </div>
            <div class="">
                <button
                    class="bg-gray-500 p-2 rounded-2xl mr-2 text-white"
                    @click="modal.show = false"
                >
                    {{modal.buttons[0]}}
                </button>
                <button
                    class="bg-gray-500 p-2 rounded-2xl ml-2 text-white"
                    @click="modal.confirm = true"
                    :class="getStyle('button', modal.action)"
                >
                    {{modal.buttons[1]}}
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>