<script setup>

</script>

<template>
    <nav class="border-gray-200 bg-navbar">
        <div class="max-w-[90vw] flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="flex items-center btn btn-ghost normal-case hover:scale-125 hover:bg-navbar">
                <img src="/favicon.ico" class="h-10 mr-3" alt="Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-navbar-text">Steam-Invest</span>
            </router-link>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700 bg-navbar text-navbar-text">
                    <li>
                        <router-link to="/" class="btn btn-ghost normal-case">Home</router-link>
                    </li>
                </ul>
            </div>

            <div class="md:order-3 inline-flex items-center">
                <div class="flex">
                    <div class="h-10 block px-4 py-2 mr-3 leading-loose text-xs text-center text-black font-semibold bg-gray-50 hover:bg-gray-300 hover:scale-110 rounded-xl">Login</div>
                    <div class="h-10 block px-4 py-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 hover:scale-110 rounded-xl">Sign Up</div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>