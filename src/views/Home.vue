<template>
	<HorizontalFoodList :horizontal="true" :title="'Plats disponibles'" :list_plat="list_plat" />
</template>

<script lang="ts" setup>
import HorizontalFoodList from '@/components/HorizontalFoodList.vue';
import { getProduit } from '@/services/produits.crud.ts';
import { ref } from 'vue';

const list_plat = ref([])
getProduit().then((response) => {
	list_plat.value = response.data;
})
</script>
