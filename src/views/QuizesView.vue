<template>
  <div class="container-fluid setting-principal-card">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="h3-custom mb-2">Cuestionarios</h3>
    </div>
    <div class="d-flex align-items-center">
      <div col>
        <h6 class="h6-custom mt-2">Buscar: </h6>
      </div>
      <div col>
        <input v-model="filter" @keypress="listFilter(filter)" class="form-control ms-3" type="text" />
      </div>
    </div>


      <CardVue :quiz="quizesList">
      </CardVue>
    </div>
    <!-- </div> -->
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CardVue from "@/components/Card.vue";
import q from "../data/quizes.json";

const filter = ref("")
const quizesList = ref(q);

const listFilter = (search: string) => {
  quizesList.value = q.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
}



</script>
<style scoped>
.h6-custom {
  margin-left: 14px;
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