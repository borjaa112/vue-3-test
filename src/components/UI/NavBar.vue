<script setup>
import { inject } from "@vue/runtime-core";

// import { router } from "vue";
const { user, updateUser } = inject("user");
</script>

<template>
  <div>
    <router-link to="/">Inicio </router-link>
    <router-link to="/about"> About</router-link>
    <router-link to="/login"> login</router-link>
  </div>
  Logued User: {{ user }}
</template>