<script setup>

</script>

<template>
	<div
		class="flex justify-end items-center w-full">
		<button
			class="bg-second-background hover:opacity-75 active:scale-90 py-3 px-7 rounded-xl mr-2 text-white"
		>
			{{ $t('settings.footers.actions.cansel') }}
		</button>
		<button
			class="bg-green-600 hover:opacity-75 active:scale-90 py-3 px-7 rounded-xl ml-2 text-white"
		>
			{{ $t('settings.footers.actions.save') }}
		</button>
	</div>
</template>

<style scoped>

</style>