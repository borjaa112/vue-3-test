<script setup>
import { ref } from "vue";
import InputBase from "../components/baseComponents/InputBase.vue";
import SelectBase from "../components/baseComponents/SelectBase.vue";
const name = ref("");
const rating = ref();
const reviews = ref([]);

function sendFeedback() {
  reviews.value.push({
    id: reviews.value.length + 1,
    name: name.value,
    rating: rating.value,
  });
}
</script>

<template>
  <div>
    <h2><slot /></h2>
    <form @submit.prevent="sendFeedback">
      <div>
        <InputBase type="text" placeholder="nombre" v-model="name" />
        Estrellas
        <SelectBase :options="[1, 2, 3, 4, 5]" v-model="rating"></SelectBase>
      </div>
      <button type="submit">enviar</button>
    </form>
  </div>

  <p v-for="(review, index) in reviews" :key="index">
    {{ review.name }} ha puntuado esta pagina web con
    {{ review.rating }} &#11088;
  </p>
</template>