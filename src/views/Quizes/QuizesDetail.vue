<template>
    <div class="container-fluid setting-principal-card">
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="h3-custom mb-2">Cuestionarios</h3>
            <h1>Detail</h1>
            <h2>{{ quiz }}</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import quizes from "../../data/quizes.json"

const route = useRoute();
const quiz = quizes.find(q => q.id === parseInt(route.params.id.toString()));
</script>