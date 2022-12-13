<template>
    <div class="container-fluid setting-principal-card">
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="h3-custom mb-2">Cuestionario: {{ quiz?.title }}</h3>
        </div>
        <div class="d-flex justify-content-center ">
            <h5 class="h6-custom mt-2">Pregunta {{counter+1}}/3 </h5>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" :style="{width: bar}">{{bar}}</div>
                </div>
            </div>
        </div>

        <div class="setting-principal-card">
            <div class="container">
                <h5 class="h6-custom mt-2 mb-3 ms-4">{{quiz?.questions[counter].id}} - {{ quiz?.questions[counter].text }} </h5>
                <div class="container">
                    <div class="row">
                        <div class="col1" v-for="option in quiz?.questions[counter].options" :key="option.id">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value=""
                                    id="flexCheckIndeterminateDisabled">
                                <label class="form-check-label" for="flexCheckIndeterminateDisabled">
                                    {{ option.label }} - {{ option.text }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-12 offset-md-10">
                        <button v-if="counter !=2" class="btn btn backcolor textcolor mb-auto" id="show-modal" @click="nextQuestion()">Siguiente</button>
                        <button v-else class="btn btn backcolor textcolor mb-auto" id="show-modal" @click="finish()">Finalizar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import quizes from "../../data/quizes.json"

const route = useRoute();
const quiz = quizes.find(q => q.id === parseInt(route.params.id.toString()));
const counter = ref(0);
const bar = ref("0%")

const nextQuestion = () =>{
    if(counter.value ===0){
        bar.value = "33.3%"
    }
    if(counter.value ===1){
        bar.value = "66.6%"
    }
    if( counter.value <3){
        counter.value++;
    }
}
const finish = () =>{
    bar.value = "100%"

}
</script>
<style scoped>
.backcolor {
  background-color: rgb(5, 40, 72);
  font-family: arial;
}
.textcolor {
  color: white;
  font-size: medium;
  font-family: arial;
}
</style>