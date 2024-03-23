<script setup>
const props = defineProps({
    show: {
        type: Boolean
    },
    action:{
        type: String
    },
    header: {
        type: String
    },
    body: {
        type: String
    },
    footer: {
        type: String
    }
});
const emits = defineEmits([
    'close',
    'action'
]);
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
            <slot name="header">
                <div class="flex justify-center items-center text-xl mb-6">
                    <p>{{ header }}</p>
                </div>
            </slot>
            <slot name="body">
                <div class="flex justify-center items-center w-64 h-64 mb-6">
                    <img :src="body">
                </div>
            </slot>
            <slot name="footer">
                <div class="flex justify-center items-center">
                    <button
                        class="bg-gray-500 p-2 rounded-xl mr-2 text-white"
                        @click="$emit('close')"
                    >
                        {{ footer[0] }}
                    </button>
                    <button
                        class="bg-gray-500 p-2 rounded-xl ml-2 text-white"
                        @click="$emit('action')"
                        :class="getStyle('button', action)"
                    >
                        {{ footer[1] }}
                    </button>
                </div>
            </slot>
        </div>
    </div>
</template>

<style scoped>

</style>