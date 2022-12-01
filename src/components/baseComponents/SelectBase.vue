<script setup>
const props = defineProps(["options"]);
</script>

<template>
  <select
    @change="
      (event) => {
        $emit('update:modelValue', event.target.value);
      }
    "
  >
    <option
      v-for="(option, index) in props.options"
      :key="index"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>