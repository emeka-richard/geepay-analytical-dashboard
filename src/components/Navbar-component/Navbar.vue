<template>
  <nav class="nav-wrapper">
    <div class="nav-main-container">
      <section class="nav-container-1">
        <navbarAppIcon />
        <navbarNavigateIconsVue />
      </section>
      <navbarAltIcons />
    </div>
  </nav>
</template>

<script setup>
import navbarAppIcon from "./navbar-app-icon.vue";
import navbarNavigateIconsVue from "./Navbar-Navigate-Icon-component/navbar-navigate-icons.vue";
import navbarAltIcons from "./Navbar-Alt-Icon-component/navbar-alt-icons.vue";

import { ref, provide } from "vue";

const iconName = ref("icon1");

provide("iconName", iconName);

provide("emitIconName", (eventName, data) => {
  iconName.value = data;
});
</script>

<style scoped>
.nav-wrapper,
.nav-main-container {
  width: 100%;
  max-width: 5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
}
.nav-wrapper {
  border-right: 1px solid var(--color-set-32);
}
.nav-main-container {
  /* position: fixed; */
  padding: 1.5rem .125rem;

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
