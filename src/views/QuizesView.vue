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
        <input class="form-control ms-3" type="text" />
      </div>
    </div>
    <div class="row" v-for="item in notes" :key="item.id">
      <div class="col-sm-3 " v-for="item in notes" :key="item.id">
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

const notes = ref(<any>[{
  id: Math.floor(Math.random() * 1000000),
  title: 'Matemática',
  text: 'Prueba tus habilidades matemáticas.',
  image: 'https://phantom-marca.unidadeditorial.es/1c4cbdc04587cda2e9268e878cd47168/resize/660/f/webp/assets/multimedia/imagenes/2022/12/10/16706837224997.jpg',
}])




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
}
</style>