<script setup>
import {ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";
import MenuButtons from "@/components/menuItems/MenuButtons.vue";

const nametag = ref('Dan3k');

const personal_link = ref('asdgczxc123');

const currencies = ref([
	{
		id: 1,
		name: 'USD',
		is_active: false
	},
	{
		id: 2,
		name: 'RUB',
		is_active: true
	},
	{
		id: 3,
		name: 'EUR',
		is_active: false
	}
]);

const locations = ref([
	{
		id: 1,
		name: 'USA',
		is_active: false
	},
	{
		id: 2,
		name: 'Russia',
		is_active: true
	},
	{
		id: 3,
		name: 'Germany',
		is_active: false
	}
]);

const about_me = ref('I am a good person');

const isItemsReady = ref(true);

</script>

<template>
	<div
		v-if="isItemsReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<div class="w-[70%]">
			<p class="text-main text-[16px] ml-2">{{ $t(`settings.body.my_account.nametag`) }}</p>
			<CustomInput
				class="w-full"
				v-model="nametag"
			/>
		</div>

		<div class="w-[70%]">
			<p class="text-main text-[16px] ml-2">{{ $t(`settings.body.my_account.personal_link`) }}</p>
			<CustomInput
				class="w-full"
				v-model="personal_link"
			/>
			<p class="w-full text-[12px] mt-[-15px] ml-2 mb-6">
				{{$t('settings.body.my_account.personal_link_desc') + ': https://steam-invest.pro/profile/' + personal_link + '/'}}
			</p>
		</div>

		<div class="w-[70%] mb-6">
			<p class="text-main text-[16px] ml-2">{{ $t(`settings.body.my_account.currency`) }}</p>
			<select
				class="bg-input rounded-md border border-black py-3 px-3 text-base font-medium h-12 after:border-[0px]"
				v-model="currencies.find(currency => currency.is_active).name"
			>
				<option
					v-for="currency in currencies"
					:value="currency.name"
				>
					{{ currency.name }}
				</option>
			</select>
		</div>

		<div class="w-[70%] mb-6">
			<p class="text-main text-[16px] ml-2">{{ $t(`settings.body.my_account.location`) }}</p>
			<select
				class="bg-input rounded-md border border-black py-3 px-3 text-base font-medium h-12 after:border-[0px]"
				v-model="locations.find(location => location.is_active).name"
			>
				<option
					v-for="location in locations"
					:value="location.name"
				>
					{{ location.name }}
				</option>
			</select>
		</div>

		<div class="w-[70%] mb-6">
			<p class="text-main text-[16px] ml-2">{{ $t(`settings.body.my_account.about_me`) }}</p>
			<textarea
				class="w-full bg-input rounded-md border border-black py-3 px-3 text-base font-medium"
				v-model="about_me"
			/>
		</div>

		<MenuButtons />

	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>

</style>