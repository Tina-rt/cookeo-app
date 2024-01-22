<template>
    <v-container grid-list-xs>
        <v-row>
            <h2>Panier</h2>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
    <div class="cart-container">

        <div class="cart-list mt-5">
            <v-card v-for="cart in cartList">
                <v-card-title primary-title>
                    {{ cart.item.label }}
                </v-card-title>
                <v-card-subtitle>
                    {{ cart.item.prix }}
                </v-card-subtitle>
                <v-card-actions>
                    <v-btn color="warning">
                        <v-icon>mdi-delete</v-icon>Delete
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <div class="cart-detail">
            <v-row class="align-item-center w-100 pa-1">
                <v-col class="text-right">
                    <h3>Total</h3>
                </v-col>
                <v-col>40000 ar</v-col>

            </v-row>
            <v-row class=" align-center">
                <v-col>
                    <v-btn color="red" icon="mdi-delete"></v-btn>
                </v-col>
                <v-col>
                    <v-btn color="success" prepend-icon="mdi-check">Valider mon panier</v-btn>
                </v-col>
                
            </v-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getCartList } from '@/services/cart.crud.ts';

const cartList = ref(Array<any>);
// cartList.value = getCartList();

cartList.value = [
    {
        item: {
            "id": 21,
            "label": "Lobster Bisque",
            "prix": 5900,
            "categorieid": 4,
            "disponible": true,
            "description": "deren, trataro, filede, nerada",
            "categorie": {
                "id": 4,
                "label": "Starchy Food"
            },
            "images": [
                {
                    "id": 16,
                    "produitid": 21,
                    "path": "1699694491365lobster-bisque.jpg"
                }
            ]
        },
        quantity: 2
    },
    {
        item: {
            "id": 21,
            "label": "Lobster Bisque",
            "prix": 5900,
            "categorieid": 4,
            "disponible": true,
            "description": "deren, trataro, filede, nerada",
            "categorie": {
                "id": 4,
                "label": "Starchy Food"
            },
            "images": [
                {
                    "id": 16,
                    "produitid": 21,
                    "path": "1699694491365lobster-bisque.jpg"
                }
            ]
        },
        quantity: 2
    },
    {
        item: {
            "id": 21,
            "label": "Lobster Bisque",
            "prix": 5900,
            "categorieid": 4,
            "disponible": true,
            "description": "deren, trataro, filede, nerada",
            "categorie": {
                "id": 4,
                "label": "Starchy Food"
            },
            "images": [
                {
                    "id": 16,
                    "produitid": 21,
                    "path": "1699694491365lobster-bisque.jpg"
                }
            ]
        },
        quantity: 2
    },
    {
        item: {
            "id": 21,
            "label": "Lobster Bisque",
            "prix": 5900,
            "categorieid": 4,
            "disponible": true,
            "description": "deren, trataro, filede, nerada",
            "categorie": {
                "id": 4,
                "label": "Starchy Food"
            },
            "images": [
                {
                    "id": 16,
                    "produitid": 21,
                    "path": "1699694491365lobster-bisque.jpg"
                }
            ]
        },
        quantity: 2
    },
    {
        item: {
            "id": 21,
            "label": "Lobster Bisque",
            "prix": 5900,
            "categorieid": 4,
            "disponible": true,
            "description": "deren, trataro, filede, nerada",
            "categorie": {
                "id": 4,
                "label": "Starchy Food"
            },
            "images": [
                {
                    "id": 16,
                    "produitid": 21,
                    "path": "1699694491365lobster-bisque.jpg"
                }
            ]
        },
        quantity: 2
    },
]



</script>

<style scoped lang="scss">
.cart-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .cart-list {
        height: 100%;
        width: 100%;
        max-width: 100%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: inset 0 0 20px -15px grey;
        border-radius: 0.4rem;
        padding: 1rem;

        .v-card {
            min-height: 120px;
        }
    }

    .cart-detail {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>