<script></script>

<template>
  <input
    type="text"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>