<script setup>

import {ref} from "vue";

const meals = ref([
	{
		id: 1,
		name: 'Breakfast',
		description: 'Healthy and nutritious breakfast.',
		img: 'https://source.unsplash.com/200x200/?breakfast',
		products: ['Eggs', 'Bacon', 'Toast', 'Orange Juice'],
	},
	{
		id: 2,
		name: 'Lunch',
		description: 'Delicious and filling lunch.',
		img: 'https://source.unsplash.com/200x200/?lunch',
		products: ['Chicken', 'Rice', 'Vegetables', 'Water'],
	},
	{
		id: 3,
		name: 'Dinner',
		description: 'Light and satisfying dinner.',
		img: 'https://source.unsplash.com/200x200/?dinner',
		products: ['Salmon', 'Quinoa', 'Salad', 'Tea'],
	}
]);

</script>

<template>
	<div>
		<h1 class="text-[32px] text-center mt-6">Vegan Power Plan</h1>
		<div class="w-screen h-[80vh] flex flex-wrap justify-center mt-6">
			<div
				class="mx-10"
				v-for="meal in meals"
				:key="meal.id"
			>
				<div class="card card-compact w-96 max-h-fit bg-navbar shadow-xl flex flex-col">
					<figure><img class="mt-4 rounded-xl" :src="meal.img" alt="Meal" /></figure>
					<div class="card-body">
						<h2 class="card-title justify-center">{{meal.name}}</h2>
						<p class="card-actions justify-center">{{meal.description}}</p>
						<div
							v-for="product in meal.products"
							:key="product"
							class="border-b-2 text-[20px] mx-16 p-2 text-center border-black"
						>
							{{product}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>