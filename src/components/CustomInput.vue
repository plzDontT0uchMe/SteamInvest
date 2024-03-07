<script setup>
import { computed, getCurrentInstance } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "text"
    },
    name: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    disabled: {
        type: [Boolean, Number, String],
        default: false
    },
    autocomplete: {
        type: String,
        default: "off"
    },
    required: {
        type: null,
        default: null
    },
    group: {
        type: [Boolean, Number],
        default: false,
    },
    inputClass: {
        type: String,
        default: ""
    },
    error: {
        type: String,
        default: ""
    },
    modelValue: {
        type: String,
        default: ""
    }
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});

const id = getCurrentInstance().uid;
</script>

<template>
    <div class="mb-6">
        <label :for="id" class="mb-3 block text-sm font-medium text-main" v-if="label">
            {{ label }}
        </label>

        <div :class="{ 'join w-full' : group }">
            <slot name="beforeInput"></slot>

            <input
                :id="id"
                :type="type"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
                :autocomplete="autocomplete"
                :required="required"
                class="custom-input"
                :class="inputClass"
                v-model.trim="value"
            />

            <slot name="afterInput"></slot>
        </div>
        <span class="text-base text-red-700 float-left pl-6" v-if="error">
            {{ error }}
        </span>
    </div>
</template>