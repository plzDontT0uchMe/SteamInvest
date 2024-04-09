<script setup>

import {ref} from "vue";
import axios from "@/axios/index.js";
import ExitIcon from "@/components/menuIcons/ExitIcon.vue";
import SessoinsItem from "@/components/menuItems/sessions/SessoinsItem.vue";
import Modal from "@/components/Modal.vue";

const sessions = ref({
	'current':
	{
		'id': 1,
		'browser': 'Chrome',
		'country': 'Russia',
		'city': 'Moscow',
		'type': 'pc',
		'create_ip': '192.0.0.1',
		'current_ip': '128.0.0.1',
		'create_date': '2021-10-10 10:10:10',
		'current_date': '2021-10-10 10:10:10'
	},
	'active': [
		{
			'id': 2,
			'browser': 'Chrome',
			'country': 'Russia',
			'city': 'Moscow',
			'type': 'pc',
			'create_ip': '192.0.0.1',
			'current_ip': '128.0.0.1',
			'create_date': '2021-10-10 10:10:10',
			'current_date': '2021-10-10 10:10:10'
		},
		{
			'id': 3,
			'browser': 'Chrome',
			'country': 'Russia',
			'city': 'Moscow',
			'type': 'mobile',
			'create_ip': '192.0.0.1',
			'current_ip': '128.0.0.1',
			'create_date': '2021-10-10 10:10:10',
			'current_date': '2021-10-10 10:10:10'
		},
		{
			'id': 4,
			'browser': 'Chrome',
			'country': 'Russia',
			'city': 'Moscow',
			'type': 'pc',
			'create_ip': '192.0.0.1',
			'current_ip': '128.0.0.1',
			'create_date': '2021-10-10 10:10:10',
			'current_date': '2021-10-10 10:10:10'
		},
		{
			'id': 5,
			'browser': 'Chrome',
			'country': 'Russia',
			'city': 'Moscow',
			'type': 'mobile',
			'create_ip': '192.0.0.1',
			'current_ip': '128.0.0.1',
			'create_date': '2021-10-10 10:10:10',
			'current_date': '2021-10-10 10:10:10'
		},
		{
			'id': 6,
			'browser': 'Chrome',
			'country': 'Russia',
			'city': 'Moscow',
			'type': 'pc',
			'create_ip': '192.0.0.1',
			'current_ip': '128.0.0.1',
			'create_date': '2021-10-10 10:10:10',
			'current_date': '2021-10-10 10:10:10'
		}
	],
	'history': [
		{
			'id': 5,
			'browser': 'Chrome',
			'type': 'pc',
			'current_ip': '128.0.0.1',
			'current_date': '2021-10-10 10:10:10'
		},
		{
			'id': 6,
			'browser': 'Chrome',
			'type': 'mobile',
			'current_ip': '128.0.0.1',
			'current_date': '2021-10-10 10:10:10'
		},
		{
			'id': 7,
			'browser': 'Chrome',
			'type': 'pc',
			'current_ip': '128.0.0.1',
			'current_date': '2021-10-10 10:10:10'
		}
	]
});

const modal = ref({
	show: false,
	action: null,
	header: null,
	body: null,
	footer: null,
});

const modalShow = (action, header, body, footer) => {
	modal.value = {
		show: true,
		action: action,
		header: header,
		body: body,
		footer: footer
	};
}

const modalAction = (async () => {
	modal.value.show = false;
	switch (modal.value.action){
		case 'deleteSession':{
			sessions.value.active = sessions.value.active.filter(session => session.id !== modal.value.body.id);
			break;
		}
		case 'deleteSessions':{
			sessions.value.active = {};
			break;
		}
	}
})

const isSessionsReady = ref(true);

</script>

<template>
	<div
		v-if="isSessionsReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>

		<div class="flex flex-col justify-between items-center w-[70%]">
			<div class="flex justify-center items-center text-[20px] text-main select-none">
				{{$t('settings.body.sessions.current_session')}}
			</div>
			<div class="w-full h-full">
				<SessoinsItem
					:session="sessions.current"
					:static="true"
				/>
			</div>
		</div>

		<div class="flex flex-col justify-between items-center w-[70%]">
			<div class="flex justify-center items-center text-[20px] text-main select-none my-1">
				{{$t('settings.body.sessions.active_sessions')}}
				<div class="ml-2 mt-2 tooltip cursor-pointer hover:opacity-75 active:scale-95" data-tip="Завершить все сессии, кроме текущей">
					<ExitIcon
						class="w-8 h-8"
						@click="modalShow('deleteSessions', 'Вы действительно хотите завершить все сессии, кроме текущей?', null, ['Отменить', 'Удалить'])"
					/>
				</div>
			</div>
			<div class="w-full max-h-[300px] overflow-y-auto pr-2">
				<SessoinsItem
					v-for="(session, index) in sessions.active"
					:key="index"
					:session="session"
					@delete="modalShow('deleteSession', 'Вы действительно хотите удалить сессию?', session, ['Отменить', 'Удалить'])"
				>
				</SessoinsItem>
			</div>
			<div v-if="!sessions.active.length" class="my-2 text-[20px]">
				{{$t('settings.body.sessions.empty_sessions')}}
			</div>
		</div>

		<div class="flex flex-col justify-between items-center w-[70%]">
			<div class="flex justify-center items-center text-[20px] text-main select-none my-1">
				{{$t('settings.body.sessions.history_sessions')}}
			</div>
			<div class="w-full max-h-[300px] overflow-y-auto">
				<SessoinsItem
					v-for="(session, index) in sessions.history"
					:key="index"
					:session="session"
				/>
			</div>
		</div>

	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>

	<Modal v-if="modal.show">
		<template v-slot:header>
			<div class="flex justify-center items-center text-xl mb-6">
				<p>{{ modal.header }}</p>
			</div>
		</template>
		<template v-slot:body>
			<div
				class="flex justify-center items-center mb-6 mx-6"
			>
				<SessoinsItem
					v-if="modal.body != null"
					:session="modal.body"
					:static="true"
				/>
			</div>
		</template>
		<template v-slot:footer>
			<div class="flex justify-center items-center">
				<button
					class="bg-gray-500 p-2 rounded-xl mr-2 text-white w-24"
					@click="modal.show = false"
				>
					{{ modal.footer[0] }}
				</button>
				<button
					class="p-2 rounded-xl ml-2 text-white w-24 bg-red-600 hover:bg-red-700"
					@click="modalAction"
				>
					{{ modal.footer[1] }}
				</button>
			</div>
		</template>
	</Modal>
</template>

<style scoped>

</style>