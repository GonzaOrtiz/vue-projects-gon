<template>
  <div class="container-fluid setting-principal-card">
    <div class="d-flex justify-content-between align-items-center">
      <div col>
      <h3 class="h3-custom mb-2">Notes</h3>
      </div>
       <div col>
      <button class="btn btn backcolor textcolor mb-auto" id="show-modal" @click="showModal = true">Nuevo</button>
       </div>
    </div>
    <div class="row" v-if="notes.length <=0"> 
      <div class="col-sm-3 ">
        <div class="card setting" style="backgroundColor: hsl(51.45215472304891, 100%, 75%)">
          <div class="card-body">
            <h5 class="card-text">Este es un ejemplo de una nota.</h5>
            <p class="card-title">{{ dateNow.toLocaleDateString("es-AR") }}</p>
          </div>
        </div>
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
  <Teleport to="body">
    <ModalVue :show="showModal" @close="showModal = false">
      <template v-slot:tittle>
        <div class="d-flex justify-content-center mb-3">
        <h3 class="h3-custom">Agregar nota</h3>
      </div>
      </template>
      <template v-slot:area>
        <textarea v-model="newNote" class="form-control"></textarea>
        <p class="redcolor" v-if="errorMessage">{{ errorMessage }}</p>
      </template>
      <template v-slot:buttons>
          <button class="btn btn-danger textcolor overlay mx-3  mt-3 mb-auto" @click="showModal = false">Cerrar</button>
          <button class="btn btn-success textcolor overlay  mt-3 mb-auto" @click="btnAddNote">Aceptar</button>
      </template>
    </ModalVue>
  </Teleport>

</template>

<script lang="ts" setup>
import ModalVue from "../components/Modal.vue";
import { ref } from "vue";

const showModal = ref(false)
const newNote = ref("");
const notes = ref(<any>[])
const errorMessage = ref("");
const dateNow = new Date();

const btnAddNote = () => {
  if (newNote.value.length < 10) {
    return errorMessage.value = "La nota debe contener mínimo 10 caracteres";
  }
  if (newNote.value.length > 100) {
    return errorMessage.value = "La nota no puede contener más de 100 caracteres";
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  })

  showModal.value = false;
  newNote.value = "";
  errorMessage.value = "";
}

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

</script>