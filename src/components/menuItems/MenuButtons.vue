<script setup>

</script>

<template>
	<div
		class="flex justify-end items-center w-full">
		<button
			class="bg-second-background hover:opacity-90 active:scale-95 py-3 rounded-xl mr-2 text-white w-32"
		>
			{{ $t('settings.footers.actions.cancel') }}
		</button>
		<button
			class="bg-green-600 hover:bg-green-700 active:scale-95 py-3 rounded-xl ml-2 text-white w-32"
		>
			{{ $t('settings.footers.actions.save') }}
		</button>
	</div>
</template>

<style scoped>

</style>