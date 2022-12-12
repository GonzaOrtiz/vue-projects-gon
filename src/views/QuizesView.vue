<template>
  <div class="container-fluid setting-principal-card">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="h3-custom">Cuestionarios</h3>
    </div>
    <div class="d-flex align-items-center">
      <div col>
        <h6 class="h6-custom mt-2">Buscar: </h6>
      </div>
      <div col>
        <input v-model="filter"  v-on:keypress="listFilter" class="form-control ms-3" type="text" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 "  v-for="item in quizesList" :key="item.id">
        <div class="card card-image-custom">
          <img class="card-img" :src="item.image">
          <div class="card-body ">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.text}}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import q from "../data/quizes.json";

const quizes = ref(q)
const filter = ref("")
const quizesList = ref(q);

const listFilter = () =>{
  quizesList.value = q.filter(x => x.title.toLowerCase().startsWith(filter.value.toLowerCase()));
}



</script>
<style scoped>
.h6-custom {
  margin-left: 12px;
}

.custom-img {
  margin: 0;
}

.card-image-custom {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px 10px 10px 10px;
  padding: 0;
  max-width: 98%;
  font-family: arial;
}</style>