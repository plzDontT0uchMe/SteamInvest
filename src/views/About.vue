<script setup>
import AboutIcon from "@/assets/images/steamInvestAbout.png";
</script>

<template>
    <div>
        <div class="flex flex-col justify-around items-center w-screen">
            <div class="text-main text-[32px] my-12">Инструкция по использованию</div>
	        <video class="w-96" autoplay muted loop preload="auto">
		        <source src="@/assets/images/main_video_ru.mp4" type="video/mp4">
		        Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<style scoped>

</style>