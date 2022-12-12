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
      <input class="form-control ms-3"  type="text"/>
    </div>
    </div>
    <div class="row">
      <div class="col-sm-3 " v-for="item in notes" :key="item.id">
        <div class="card setting" :style="{ backgroundColor: item.backgroundColor }">
          <div class="card-body">
            <h5 class="card-text">{{ item.text }}</h5>
            <p class="card-title">{{ item.date.toLocaleDateString("es-AR") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>



</template>

<script lang="ts" setup>
import { ref } from "vue";

const notes = ref(<any>[{
    id: Math.floor(Math.random() * 1000000),
    text: 'some value',
    date: new Date()
  }])




</script>
<style scoped>
.h6-custom{
  margin-left: 12px;
}
</style>