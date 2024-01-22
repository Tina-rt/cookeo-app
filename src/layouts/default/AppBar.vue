<template>
	<v-app-bar :elevation="0" color="primary" >
		<template v-slot:prepend>
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
		</template>

		<v-app-bar-title>Cookeo</v-app-bar-title>
		<v-spacer></v-spacer>
		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		
	</v-app-bar>
	<v-navigation-drawer elevation="0" v-model="drawer" location="left" temporary>
		<v-list :items="items"></v-list>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const items = ref([
	{
		title: 'Foo',
		value: 'foo',
	},
	{
		title: 'Bar',
		value: 'bar',
	},
	{
		title: 'Fizz',
		value: 'fizz',
	},
	{
		title: 'Buzz',
		value: 'buzz',
	},
],);

const drawer = ref(false);


</script>
