<script setup>
import { ref } from "vue";
import { provide } from "vue";
import ChangeColor from "./components/ChangeColor.vue";
import RateUs from "./components/RateUs.vue";
import NavBar from "./components/UI/NavBar.vue";

const user = ref("Invitado");
function updateUser(userName) {
  user.value = userName;
}
provide("user", {
  user,
  updateUser,
});
const color = ref("blue");

function changeBackground(param1) {
  color.value = param1;
}
</script>

<template>
  <div>
    <NavBar />
    <!-- <h2>Rate us</h2> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>