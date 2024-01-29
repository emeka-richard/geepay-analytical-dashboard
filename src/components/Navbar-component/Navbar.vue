<template>
  <nav class="nav-wrapper">
    <section class="nav-container-1">
      <navbarAppIcon />
      <navbarNavigateIconsVue />
    </section>
    <navbarAltIcons />
  </nav>
</template>

<script setup>
import navbarAppIcon from "./navbar-app-icon.vue";
import navbarNavigateIconsVue from "./Navbar-Navigate-Icon-component/navbar-navigate-icons.vue";
import navbarAltIcons from "./Navbar-Alt-Icon-component/navbar-alt-icons.vue";

import { ref, provide } from "vue"

const iconName = ref("icon1")

provide("iconName", iconName)

provide("emitIconName", (eventName, data)=>{
  iconName.value = data
})

</script>

<style scoped>
.nav-wrapper {
  width: 100%;
  max-width: 5rem;
  max-height: 100vh;
  /* height: inherit; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0rem;
  align-self: stretch;
  border-right: 1px solid var(--color-set-32);
}
.nav-container-1 {
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
}
</style>
