<template>
    <div class="d-flex justify-content-between align-items-center">
        <h3 class="h3-custom mb-2">Cuestionario: {{ title }}</h3>
    </div>
    <div class="d-flex justify-content-center ">
        <h5 class="h6-custom mt-2">Pregunta {{ counter + 1 }}/3 </h5>
    </div>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="progress mb-4">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                    aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" :style="{ width: bar }">{{ bar }}</div>
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup>
defineProps({
    title: String,
    counter: Number,
    bar: String
})
</script>