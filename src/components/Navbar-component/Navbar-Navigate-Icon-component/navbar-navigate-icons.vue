<template>
  <div class="navbar-navigate-icon-wrapper">
    <navbarNavigateIcon1Vue />
    <navbarNavigateIcon2Vue />
    <navbarNavigateIcon3Vue />
    <navbarNavigateIcon4Vue />
    <navbarNavigateIcon5Vue />
    <navbarNavigateIcon6Vue />
    <navbarNavigateIcon7Vue />
  </div>
</template>

<script setup>
import navbarNavigateIcon1Vue from './navbar-navigate-icon1.vue';
import navbarNavigateIcon2Vue from './navbar-navigate-icon2.vue';
import navbarNavigateIcon3Vue from './navbar-navigate-icon3.vue';
import navbarNavigateIcon4Vue from './navbar-navigate-icon4.vue';
import navbarNavigateIcon5Vue from './navbar-navigate-icon5.vue';
import navbarNavigateIcon6Vue from './navbar-navigate-icon6.vue';
import navbarNavigateIcon7Vue from './navbar-navigate-icon7.vue';


</script>

<style scoped>
.navbar-navigate-icon-wrapper {
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
  display: none;
}


@media screen and (min-width: 769px) {
  .navbar-navigate-icon-wrapper {
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

}
</style>
