<template>
  <div class="nav-alt-wrapper">
    <navbarAltIcon1 />
    <navbarAltIcon2 />
    <navbarAltIcon3 />
  </div>
</template>

<script setup>
import navbarAltIcon1 from './navbar-alt-icon1.vue';
import navbarAltIcon2 from './navbar-alt-icon2.vue';
import navbarAltIcon3 from './navbar-alt-icon3.vue';

// import { ref, provide } from "vue"

// const iconName = ref(null)

// provide("iconName", iconName)
// provide("emitIconName", (eventName, data)=>{
//   iconName.value = data
// })

</script>

<style scoped>
.nav-alt-wrapper {
  width: inherit;
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
  gap: 1rem;
}
</style>
