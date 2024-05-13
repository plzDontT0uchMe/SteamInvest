<script setup>

import {ref} from "vue";

const items = ref([
	{
		id: 1,
		name: 'Balanced Nutrition Plan',
		description: 'A balanced diet with all the necessary nutrients.',
		img: 'https://picsum.photos/seed/1/200'
	},
	{
		id: 2,
		name: 'High Protein Diet',
		description: 'A diet high in protein for muscle growth and recovery.',
		img: 'https://picsum.photos/seed/2/200'
	},
	{
		id: 3,
		name: 'Low Carb Meal Plan',
		description: 'A low carbohydrate diet for weight loss and blood sugar control.',
		img: 'https://picsum.photos/seed/3/200'
	},
	{
		id: 4,
		name: 'Vegetarian Delight',
		description: 'A plant-based diet for those avoiding meat.',
		img: 'https://picsum.photos/seed/4/200'
	},
	{
		id: 5,
		name: 'Vegan Power Plan',
		description: 'A diet free of all animal products.',
		img: 'https://picsum.photos/seed/5/200'
	},
	{
		id: 6,
		name: 'Gluten-Free Diet',
		description: 'A diet for those with gluten intolerance or celiac disease.',
		img: 'https://picsum.photos/seed/6/200'
	},
	{
		id: 7,
		name: 'Keto Kickstart',
		description: 'A low-carb, high-fat diet that can help burn fat more effectively.',
		img: 'https://picsum.photos/seed/7/200'
	},
	{
		id: 8,
		name: 'Paleo Performance Plan',
		description: 'A diet based on foods similar to what might have been eaten during the Paleolithic era.',
		img: 'https://picsum.photos/seed/8/200'
	}
]);

</script>

<template>
	<div>
		<h1 class="text-[32px] text-center mt-6">Meal Plans</h1>
		<div class="w-screen h-[80vh] flex flex-wrap justify-center mt-6">
			<div
				class="mx-10"
				v-for="item in items"
				:key="item.id"
			>
				<div class="card card-compact w-96 h-96 bg-navbar shadow-xl flex flex-col">
					<figure><img class="mt-4 rounded-xl" :src="item.img" alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="card-title">{{item.name}}</h2>
						<p>{{item.description}}</p>
						<div class="card-actions justify-center">
							<button class="btn btn-primary btn-outline">Open</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>