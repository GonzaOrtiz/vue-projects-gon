<template>
    <div class="row ms-1" >
        <div class="col-sm-3 mb-3 mt-3" v-for="item in quiz" :key="item.id">
        <div class="card card-image-custom">
            <img class="card-img" :src="item.image">
            <div class="card-body ">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.text }}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
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


</style>