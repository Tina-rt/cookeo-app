<template>
    <div class="title-section">
		<h2>{{ title }}</h2>

    </div>
    <div v-if="horizontal" class="food-list" :class="{horizontal: horizontal, vertical: !horizontal}">

        <v-card width="200" v-for="food in list_plat" class="mx-auto" :min-width="horizontal?200:100" max-width="344">
            <v-img :src="`http://localhost:3001/images/${food.images[0].path}`" height="200px" cover></v-img>

            <v-card-title>
                {{ food.label }}
            </v-card-title>

            <v-card-subtitle>
                {{ food.prix }} Ar
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text">
                    Ajouter au panier
                </v-btn>

                <v-spacer></v-spacer>

            </v-card-actions>

            
        </v-card>
    </div>
    <div v-else>
        <v-card>
            
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    title?:String,
    list_plat: Array<any>,
    horizontal: Boolean
}>();

const show = ref(false);
</script>

<style scoped lang="scss">
.horizontal{
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    overflow-x: auto;
    padding: 2rem;
    padding-left: 1rem;

    .v-card{
        width: max-content;
    }

}

.vertical{
    display: flex;
    flex-direction: column;
    gap: 20px;

    .v-card{
        max-width: 200px;
    }
}
</style>