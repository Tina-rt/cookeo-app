<template>
  <v-app>
    <default-bar />
    <v-container fluid style="height: 94vh;">
      <default-view />
    </v-container>
    <bottom-app-bar />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import BottomAppBar from './BottomAppBar.vue';
</script>
