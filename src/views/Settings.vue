<script setup>
import {computed, ref} from "vue";
import { useRoute } from "vue-router";
import Hr from "@/components/menuItems/Hr.vue";

const route = useRoute();

const menuItems = ref([
    {
        name: 'my_account',
        route: 'my-account',
	    children: [
		    {
			    name: 'personalization',
			    route: 'personalization'
		    },
		    {
			    name: 'general_information',
			    route: 'general-information'
		    }
	    ]
    },
    {
        name: 'api_keys',
	    route: 'api-keys'
    },
    {
        name: 'sessions',
	    route: 'sessions'
    },
    {
        name: 'socials',
	    route: 'socials'
    },
    {
        name: 'tariffs',
	    route: 'tariffs'
    },
    {
        name: 'friends',
	    route: 'friends'
    },
    {
        name: 'security',
	    route: 'security'
    },
    {
        name: 'notifications',
	    route: 'notifications'
    },
    {
        name: 'wallet',
	    route: 'wallet',
	    children: [
		    {
			    name: 'replenish_balance',
			    route: 'replenish-balance'
		    },
		    {
			    name: 'replenishment_history',
			    route: 'replenishment-history'
		    }
	    ]
    }
])

const currentRoute = computed(() => {
	for(let item of menuItems.value) {
		if(item.route == route.name) return item;
		if(item.children){
			for(let child of item.children) {
				if(child.route == route.name) return child;
			}
		}
	}
});

</script>

<template>
    <div class="flex justify-center items-center">
        <div class="flex justify-between flex-grow-[3] max-w-[1200px] my-10">
            <ul class="menu flex items-center w-[20%] h-full bg-navbar rounded-xl">
                <li class="w-full p-1" v-for="(item, index) in menuItems" :key="index">
	                <router-link
	                    v-if="!item?.children"
	                    class="flex justify-center items-center text-main"
	                    :class="{active: item.name == currentRoute.name}"
	                    :to="{name: item.route}"
                    >
	                    {{ $t(`settings.headers.${item.name}`) }}
                    </router-link>

	                <details v-else :open="item.children.filter((children_route) => children_route.route == route.name)[0]">
		                <summary class="flex justify-center items-center text-main">{{ $t(`settings.headers.${item.name}`) }}</summary>
		                <ul>
			                <li v-for="(child, index) in item.children" :key="index">
				                <router-link
					                class="flex justify-center items-center text-main"
					                :to="{name: child.route}"
					                :class="{active: child.name == currentRoute.name}"
				                >
					                {{ $t(`settings.headers.${child.name}`) }}
				                </router-link>
			                </li>
		                </ul>
	                </details>

                </li>
            </ul>
	        <div class="flex flex-col items-center w-[75%] bg-navbar rounded-xl px-16">
		        <div class="text-[24px] text-main py-2">{{ $t(`settings.headers.${currentRoute.name}`) }}</div>
		        <Hr />
		        <router-view></router-view>
	        </div>
        </div>
    </div>
</template>

<style scoped>

</style>