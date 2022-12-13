<template>
    <div class="container-fluid setting-principal-card">
        <div class="d-flex justify-content-between align-items-center">
            <h3 class="h3-custom mb-2">Cuestionario: {{ quiz?.title }}</h3>
        </div>
        <div class="d-flex justify-content-center ">
            <h5 class="h6-custom mt-2">Pregunta 1/3 </h5>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="progress mb-4">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" style="width: 66%">66%</div>
                </div>
            </div>
        </div>


        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminateDisabled" disabled>
            <label class="form-check-label" for="flexCheckIndeterminateDisabled">
                Disabled indeterminate checkbox
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
            <label class="form-check-label" for="flexCheckDisabled">
                Disabled checkbox
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
            <label class="form-check-label" for="flexCheckCheckedDisabled">
                Disabled checked checkbox
            </label>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import quizes from "../../data/quizes.json"

const route = useRoute();
const quiz = quizes.find(q => q.id === parseInt(route.params.id.toString()));
</script>