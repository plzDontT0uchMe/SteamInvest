<script setup>
import {ref} from "vue";
import TariffsItem from "@/components/menuItems/tariffs/TariffsItem.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/navigation';

const tariffs = ref([
	{
		id: 1,
		name: 'Free',
		price: 'Free',
		possibilities: [
			'Возможность создания 1 бота',
			'Возможность создания 1 стратегии',
			'Возможность создания 1 торговой пары',
		],
		is_active: true
	},
	{
		id: 2,
		name: 'Pro',
		price: '100$',
		possibilities: [
			'Возможность создания 1 бота',
			'Возможность создания 1 стратегии',
			'Возможность создания 1 торговой пары',
			'Возможность создания 1 сигнала',
			'Возможность создания 1 уведомления',
			'Возможность создания 1 торгового бота'
		],
		is_active: false
	},
	{
		id: 3,
		name: 'Premium',
		price: '10$',
		possibilities: [
			'Возможность создания 1 бота',
			'Возможность создания 1 стратегии',
			'Возможность создания 1 торговой пары',
			'Возможность создания 1 сигнала'
		],
		is_active: false
	}
])

const possibilities = ref([
	'Возможность создания 1 бота',
	'Возможность создания 1 стратегии',
	'Возможность создания 1 торговой пары',
	'Возможность создания 1 сигнала',
	'Возможность создания 1 уведомления',
	'Возможность создания 1 торгового бота'
])

const isTariffsReady = ref(true);

</script>

<template>
	<div
		v-if="isTariffsReady"
		class="flex flex-col justify-center items-center w-full my-6"
	>
		<swiper
			:navigation="true"
			:slidesPerView="2"
			:spaceBetween="50"
			:modules="[Navigation]"
			class="swiper"
			:centeredSlides="false"
			:centeredSlidesBounds="true"
			:slideToClickedSlide="true"
		>
			<swiper-slide
				v-for="tariff in tariffs"
			>
				<TariffsItem
					:tariff="tariff"
					:possibilities="possibilities"
				/>
			</swiper-slide>
		</swiper>
	</div>
	<span v-else class="loading loading-spinner w-20 m-auto flex justify-center items-center"></span>
</template>

<style scoped>
.swiper {
	width: 100%;
	height: 100%;
	padding: 50px;
}

.swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>