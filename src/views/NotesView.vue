<template>

<!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->

<Teleport to="body">
  <!-- use the modal component, pass in the prop -->
  <ModalVue :show="showModal" @close="showModal = false">
    <template #header>
      <h3>custom header</h3>
    </template>
  </ModalVue>
</Teleport>



  <div class="container-fluid setting-principal-card">
    <div class="d-flex justify-content-between">
      <h3>Notes</h3>
      <button class="btn btn backcolor textcolor" id="show-modal" @click="showModal = true">Nuevo</button>
    </div>
    <div class="row">
      <div class="col-sm-3 ">
        <div class="card setting">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ModalVue from "../components/Modal.vue";
import { ref } from "vue";

const showModal = ref(false)

</script>

<style scoped>
.setting {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  font-family: arial;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
}

h3 {
  margin: 10px 10px 0px 10px;
  padding: 10px 10px 0px 10px;
}

.backcolor {
  background-color: rgb(5, 40, 72);
  font-family: arial;
}

.textcolor {
  color: white;
  font-size: medium;
  font-family: arial;
}



.btn-set {
  padding: 10px 20px;
}

.setting-principal-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  max-width: 98%;
  font-family: arial;
}
</style>