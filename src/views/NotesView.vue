<template>
  <Teleport to="body">
    <ModalVue :show="showModal" @close="showModal = false">
      <template v-slot:tittle>
        <div class="d-flex justify-content-center mb-3">
        <h3>Agregar nota</h3>
      </div>
      </template>
      <template v-slot:area>
        <textarea v-model="newNote"></textarea>
        <p class="redcolor" v-if="errorMessage">{{ errorMessage }}</p>
      </template>
      <template v-slot:buttons>
          <button class="btn btn-danger textcolor overlay mx-3" @click="showModal = false">Cerrar</button>
          <button class="btn btn-success textcolor overlay" @click="btnAddNote">Aceptar</button>
      </template>
    </ModalVue>
  </Teleport>

  <div class="container-fluid setting-principal-card">
    <div class="d-flex justify-content-between">
      <h3>Notes</h3>
      <button class="btn btn backcolor textcolor" id="show-modal" @click="showModal = true">Nuevo</button>
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

textarea {
  height: 100px;
  width: 340px;
  /* border-color: rgb(5, 40, 72); */
  border-color: grey;
  border-radius: 5px;
}

.redcolor {
  color: red;
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