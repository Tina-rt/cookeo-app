<template>
    <v-bottom-navigation color="primary" grow v-model="currentTab">
        <v-btn v-for="(menu, index) in MENULIST" :key="index" :active="index==store.currentTab">
            <v-icon>{{ menu.icon }}</v-icon>
            {{ menu.label }}
        </v-btn>
        
    </v-bottom-navigation>
</template>

<script lang="ts" setup>
import router from '@/router';
import { useAppStore } from '@/store/app';
import { ref, onBeforeMount } from 'vue';
import { watch } from 'vue';

const store = useAppStore();
const MENULIST = [
    {
        path: '/me',
        label: 'Me',
        icon: 'mdi-account'
    },
    {
        path: '/',
        label: 'plat',
        icon: 'mdi-food-variant'
    },
    {
        path: '/cart',
        label: 'panier',
        icon: 'mdi-cart'
    },
    {
        path: '/',
        label: 'Messages',
        icon: 'mdi-message'
    },

]

onBeforeMount(() => {
    let currRoute = router.currentRoute;
    console.log(currRoute.value.path);
    let currentMenu = MENULIST.findIndex(element=>element.path==currRoute.value.path);
    if (currentMenu >= 0){
        store.currentTab = currentMenu;
    }else{
        store.currentTab = 0;
        
    }
})


const currentTab = ref();



watch(currentTab, (newVal) => {
    store.currentTab = newVal;
    router.push(MENULIST[newVal].path);
    console.log(store.currentTab);
})

</script>