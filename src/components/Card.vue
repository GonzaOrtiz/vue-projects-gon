<template>
    <div class="row ms-1" >
        <div class="col-sm-3 mb-3 mt-3" v-for="item in quiz" :key="item.id">
        <div class="card card-image-custom setting-secondary-card">
            <RouterLink class="text-non-decoration" :to="`/quizes/${item.id}`">
            <img class="card-img" :src="item.image">
            <div class="card-body ">
                <h5 class="card-title" >{{ item.title }}</h5>
                <p class="card-text">{{ item.text }}</p>
            </div>
        </RouterLink>
        </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const {quiz} = defineProps(['quiz']);
</script>

<style scoped>
.h6-custom {
  margin-left: 12px;
}

.text-non-decoration{
    text-decoration: none;
    color: black;
}

.setting-secondary-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card:hover{
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.30), 0 4px 8px rgba(0,0,0,.3);
}
</style>