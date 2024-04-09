<script setup>

import {ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import MenuButtons from "@/components/menuItems/MenuButtons.vue";
import QRCode from "qrcode.vue";

const email = ref("danekpirojok@mail.ru");
const password = ref("");
const confirmPassword = ref("");
const qrCode = ref("Some value for the QR code");

const isDataReady = ref(true);

</script>

<template>
	<div
		v-if="isDataReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div class="w-[70%]">
			<p class="text-main text-[16px] ml-2">{{$t('settings.body.security.email')}}</p>
			<CustomInput
				v-model="email"
				type="email"
				:placeholder="$t('settings.body.security.email')"
			/>
		</div>

		<div class="w-[70%]">
			<p class="text-main text-[16px] ml-2">{{$t('settings.body.security.password')}}</p>
			<CustomInput
				v-model="password"
				type="password"
				:placeholder="$t('settings.body.security.password')"
			/>
			<p class="text-main text-[16px] ml-2">{{$t('settings.body.security.confirm_password')}}</p>
			<CustomInput
				v-model="confirmPassword"
				type="password"
				:placeholder="$t('settings.body.security.confirm_password')"
			/>
		</div>

		<div class="flex flex-col justify-center items-center mb-6">
			<p class="text-main text-[16px]">QR Code</p>
			<QRCode
				:value="qrCode"
				:options="{ width: 128 }"
			/>
		</div>

		<MenuButtons />
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>