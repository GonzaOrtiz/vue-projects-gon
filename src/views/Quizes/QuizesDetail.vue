<template>
    <div class="container-fluid setting-principal-card">
        <QuestionHeaderVue :title="quiz?.title" :counter="counter" :bar="bar"></QuestionHeaderVue>
        <div class="setting-principal-card">
            <div class="container">
                <h5 class="h6-custom mt-2 mb-3 ms-4">{{quiz?.questions[counter].id}} - {{ quiz?.questions[counter].text }} </h5>
                <div class="container">
                    <div class="row">
                        <div class="col1" v-for="option in quiz?.questions[counter].options" :key="option.id">
                            <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled">
                            <label class="form-check-label ms-3" for="flexRadioDisabled">
                                {{ option.label }} - {{ option.text }}
                            </label>
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
import QuestionHeaderVue from '@/components/quizes/QuestionHeader.vue';

const route = useRoute();
const quiz = quizes.find(q => q.id === parseInt(route.params.id.toString()));
const counter = ref(0);
const bar = ref("0%")
const active = ref("checked")

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