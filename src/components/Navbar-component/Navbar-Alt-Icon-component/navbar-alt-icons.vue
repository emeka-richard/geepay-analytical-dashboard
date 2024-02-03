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


</script>

<style scoped>
.nav-alt-wrapper {
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  display: none;
}


@media screen and (min-width: 769px) {
.nav-alt-wrapper {
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
}
</style>
